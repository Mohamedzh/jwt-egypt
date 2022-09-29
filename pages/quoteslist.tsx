import React from 'react'
import NavigationBar from '../components/NavigationBar'
import WomenList from '../components/womenList'
import client, { getClient, previewClient } from '../lib/sanity'

type Props = {
    data: any
}

function Test({ data }: Props) {
    return (
        <div >
            <NavigationBar data={data} />
            <WomenList data={data} />
        </div>
    )
}

export default Test

export async function getStaticProps() {
    //     const postFields = `
    //   _id,
    //   name,
    //   title,
    //   'date': publishedAt,
    //   excerpt,
    //   'slug': slug.current,
    //   'coverImage': mainImage,
    //   'author': author->{name, 'picture': image.asset->url},
    // `
    const quoteList = await getClient(false).fetch(
        `*[_type == "quote"]{body, person->{department->{title}, name, "imageUrl":image.asset->url, job_title}, color-> {name, color_code}}`)

    const themeColors = await getClient(false).fetch(
        `*[_type == "siteTheme"]{firstColor->{color_code}, secondColor->{color_code}}`)

    return { props: { data: { quoteList, themeColors } } }
}