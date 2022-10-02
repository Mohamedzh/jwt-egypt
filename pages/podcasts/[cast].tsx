import React from 'react'
import Footer from '../../components/footerTab'
import NavigationBar from '../../components/NavigationBar'
import { getClient } from '../../lib/sanity'
import { Howl, Howler } from 'howler';
import ReactAudioPlayer from 'react-audio-player';

function Podcast({ data }) {
    console.log(data.episodes)
    console.log(data.videoEpisodes)

    // let audio = new Audio(data.podcast[0].fileUrl)

    // var sound = new Howl({
    //     src: [`${data.podcast[0].fileUrl}`]
    // });

    // sound.play();
    return (
        <div
        // className=" bg-cover h-screen bg-[url('/podcastBg.jpg')]"
        >
            <NavigationBar data={data} />
            <div className='m-20'>
                {data.videoEpisodes.map((video, idx) =>
                    <div
                        className='m-5'
                        key={idx}
                    >
                        <p className='text-left my-5 text-3xl'>{video.title}</p>
                        <video
                            id="my-player"
                            className="video-js h-96 aspect-video"
                            controls
                            preload="auto"
                            poster=""
                            data-setup='{}'>
                            <source src={`${video.videoUrl}`}></source>
                            {/* <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm"></source>
                    <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg"></source> */}

                        </video>
                        <p className='text-left my-5 text-xl'>{video.description}</p>

                    </div>
                )}
            </div>

            <div>
                <ReactAudioPlayer
                    src="my_audio_file.ogg"
                    autoPlay
                    controls
                />
            </div>
            {/* <button
                onClick={() => sound.play()
                }
            >
                Click to play
            </button> */}
            <Footer data={data} />
        </div >
    )
}

export default Podcast

export async function getStaticProps() {

    const quoteList = await getClient(false).fetch(
        `*[_type == "quote"]{body, person->{department->{title}, name, "imageUrl":image.asset->url, job_title}, color-> {name, color_code}}`)

    const themeColors = await getClient(false).fetch(
        `*[_type == "siteTheme"]{firstColor->{color_code}, secondColor->{color_code}}`)

    const JWTContact = await getClient(false).fetch(`*[_type == "contactUs"]`)
    const navbarTheme = await getClient(false).fetch(
        `*[_type == "navbarTheme"]{"logo":logo.asset->url, buttonText, logoTextColor->{color_code}, menuTextColor->{color_code}, altText}`
    )

    const podcast = await getClient(false).fetch(
        `*[_type == "podcast"]{description, "fileUrl": audio.asset->url}`
    )
    const episodes = await getClient(false).fetch(
        `*[_type == "episodes"]{title, "audioUrl": audio.asset->url}`
    )
    const videoEpisodes = await getClient(false).fetch(
        `*[_type == "videoEpisodes"]{title, "videoUrl": video.asset->url, description}`
    )

    return { props: { data: { quoteList, themeColors, JWTContact, navbarTheme, podcast, episodes, videoEpisodes } } }
}