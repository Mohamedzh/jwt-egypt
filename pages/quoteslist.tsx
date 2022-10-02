import React from 'react'
import Footer from '../components/footerTab'
import NavigationBar from '../components/NavigationBar'
import WomenList from '../components/womenList'
import { getClient } from '../lib/sanity'

type Props = {
    data: any
}

function Test({ data }: Props) {
    return (
        <div >
            <NavigationBar data={data} />
            <WomenList data={data} />
            <Footer data={data} />
        </div>
    )
}

export default Test

export async function getStaticProps() {

    const quoteList = await getClient(false).fetch(
        `*[_type == "quote"]{body, person->{department->{title}, name, "imageUrl":image.asset->url, job_title}, color-> {name, color_code}}`)

    const themeColors = await getClient(false).fetch(
        `*[_type == "siteTheme"]{firstColor->{color_code}, secondColor->{color_code}}`)

    const JWTContact = await getClient(false).fetch(`*[_type == "contactUs"]`)
    const navbarTheme = await getClient(false).fetch(
        `*[_type == "navbarTheme"]{"logo":logo.asset->url, buttonText, logoTextColor->{color_code}, menuTextColor->{color_code}, altText}`
        )

    return { props: { data: { quoteList, themeColors, JWTContact, navbarTheme } } }
}