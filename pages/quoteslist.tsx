import React from 'react'
import NavigationBar from '../components/NavigationBar'
import WomenList from '../components/womenList'
import client, { getClient, previewClient } from '../lib/sanity'

type Props = {
    quoteList: any
}

function Test({ quoteList }: Props) {
    console.log(quoteList)
    return (
        <div className='bg-gradient-to-r from-wtCyan to-wtViolet'>
            <NavigationBar />
            <WomenList quoteList={quoteList} />
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
    console.log(quoteList);

    return { props: { quoteList } }
}