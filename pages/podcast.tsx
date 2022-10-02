import React from 'react'
import Footer from '../components/footerTab'
import NavigationBar from '../components/NavigationBar'
import { getClient } from '../lib/sanity'
import { Howl, Howler } from 'howler';



function Podcast({ data }) {
    console.log(data.podcast[0].fileUrl);
    // let audio = new Audio(data.podcast[0].fileUrl)

    var sound = new Howl({
        src: [`${data.podcast[0].fileUrl}`]
    });

    sound.play();
    return (
        <div
        // className=" bg-cover h-screen bg-[url('/podcastBg.jpg')]"
        >
            <NavigationBar data={data} />
            <div className='h-screen'>
                <h1 className='text-white'>input for podcast</h1>
                <label className='text-white' htmlFor="trial">Try uploading audio</label>
                <input
                    id="trial"
                    type='file'
                    accept='audio/*'
                    capture='user'
                >
                </input>
            </div>
            <button
                onClick={() => sound.play()
                }
            >
                Click to play
            </button>
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

    return { props: { data: { quoteList, themeColors, JWTContact, navbarTheme, podcast } } }
}