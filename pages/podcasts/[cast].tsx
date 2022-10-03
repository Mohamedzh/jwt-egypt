import React from 'react'
import Footer from '../../components/footerTab'
import NavigationBar from '../../components/NavigationBar'
import { getClient } from '../../lib/sanity'
import ReactAudioPlayer from 'react-audio-player';
import { TiArrowBack } from 'react-icons/ti'
import Link from 'next/link';

function Podcast({ data }) {

    return (
        <div>
            <NavigationBar data={data} />
            <p className='pt-28 text-6xl text-center font-bold'>{data.podcast[0].title}</p>
            <Link href='/podcasts'>
                <a>
                    <TiArrowBack className='mx-10 h-24 w-24 text-wtMediumRuby' />
                </a>
            </Link>
            <div className='mx-20 mb-20'>
                {data.episodes.map((media, idx) =>
                (media.type === "video" ? <div
                    className='m-5'
                    key={idx}
                >
                    <p className='text-left my-5 text-3xl font-semibold'>{media.title}</p>
                    <div className='grid grid-cols-2'>
                        <video
                            id="my-player"
                            className="video-js h-96 aspect-video"
                            controls
                            preload="auto"
                            poster=""
                            data-setup='{}'>
                            <source src={`${media.url}`}></source>

                        </video>
                        <p className='text-left mx-10 my-5 text-xl'>{media.description}</p>
                    </div>
                </div> :
                    <div
                        key={idx}
                        className='grid grid-cols-2'
                    >
                        <div>
                            <p className='text-left my-5 text-3xl'>{media.title}</p>
                            <ReactAudioPlayer
                                className='w-96'
                                src={`${media.url}`}
                                autoPlay={false}
                                controls
                            />
                            <p className='text-left my-5 text-xl'>{media.description}</p>
                        </div>
                        <img
                            className='h-96 place-self-center'
                            src={`${media.imgUrl}`}
                        />
                    </div>
                )
                )}
            </div>
            <Footer data={data} />
        </div >
    )
}
export default Podcast

export async function getStaticPaths() {
    const podcasts = await getClient(false).fetch(
        `*[_type == "podcasts"]`
    )
    const paths = podcasts.map((cast) => {
        return {
            params: {
                cast: cast._id,
            },
        }
    })
    return {
        paths,
        fallback: false,
    }
}


export async function getStaticProps({ params }) {

    let id = params.cast

    const quoteList = await getClient(false).fetch(
        `*[_type == "quote"]{body, person->{department->{title}, name, "imageUrl":image.asset->url, job_title}, color-> {name, color_code}}`)

    const themeColors = await getClient(false).fetch(
        `*[_type == "siteTheme"]{firstColor->{color_code},
             secondColor->{color_code},
             quotesSectionColor->{color_code},
             videoSectionColor->{color_code},
             storiesSectionColor->{color_code},
             internSectionColor->{color_code},
             careerSectionColor->{color_code},
             footerTextColor->{color_code},
             sectionTitleColor->{color_code}
            }`
    )

    const JWTContact = await getClient(false).fetch(`*[_type == "contactUs"]`)
    const navbarTheme = await getClient(false).fetch(
        `*[_type == "navbarTheme"]{"logo":logo.asset->url, buttonText, logoTextColor->{color_code}, menuTextColor->{color_code}, altText}`
    )

    const podcast = await getClient(false).fetch(
        `*[_type == "podcasts" && _id == $id]{description, title, "imgUrl":image.asset->url}`, { id }
    )
    const episodes = await getClient(false).fetch(
        `*[_type == "episodes" && references(*[_type == "podcasts" && _id == $id]._id)] | order(_createdAt asc) {type, _createdAt, title, "url":media.asset->url, "imgUrl":image.asset->url, podcast->{title, "imageUrl":image.asset->url}, description}`, { id }
    )

    return { props: { data: { quoteList, themeColors, JWTContact, navbarTheme, podcast, episodes } } }
}