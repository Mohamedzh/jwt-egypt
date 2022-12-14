import React from 'react'
import Footer from '../../components/footerTab'
import NavigationBar from '../../components/NavigationBar'
import { getClient } from '../../lib/sanity'
import Link from 'next/link';




function Podcast({ data }) {

    return (
        <div>
            <NavigationBar data={data} />
            <div className='my-10 md:m-20 lg:m-20'>
                {data.podcasts.map((cast, idx) =>
                    <div
                        className={`py-3 ${idx === 0 ? 'pt-10' : ''} lg:py-10 mx-5 grid md:grid-cols-2 lg:grid-cols-2`}
                        key={idx}
                    >
                        <div>
                            <p className='text-left my-5 text-3xl'>{cast.title}</p>
                            <p className='text-left my-5 text-xl'>{cast.description}</p>
                        </div>
                        <Link href={`/podcasts/${cast._id}`}>
                            <a>
                                <img
                                    className='mt-5 lg:ml-5'
                                    src={cast.imgUrl}
                                />
                            </a>
                        </Link>
                        <Link href={`/podcasts/${cast._id}`}>
                            <a className=' font-bold text-wtImperial hover:text-wtTango'>
                                View all episodes...
                            </a>
                        </Link>
                    </div>
                )}
            </div>
            <Footer data={data} />
        </div >
    )
}

export default Podcast

export async function getStaticProps() {

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

    const podcasts = await getClient(false).fetch(
        `*[_type == "podcasts"] | order(_createdAt asc){_id, description, title, "imgUrl":image.asset->url}`
    )
    const episodes = await getClient(false).fetch(
        `*[_type == "episodes"]{type, title, "url":media.asset->url, podcast->{title, "imageUrl":image.asset->url}, description}`
    )

    return { props: { data: { quoteList, themeColors, JWTContact, navbarTheme, podcasts, episodes } } }
}