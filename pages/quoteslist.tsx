import React from 'react'
import NavigationBar from '../components/NavigatoinBar'
import WomenList from '../components/womenList'
import client, { getClient, previewClient } from '../lib/sanity'

type Props = {
    data: any
}

function Test({ data }: Props) {
    console.log(data)
    return (
        <div className='bg-gradient-to-r from-wtCyan to-wtViolet'>
            <NavigationBar />
            <WomenList />
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
    const data = await getClient(false).fetch(
        `*[_type == "quote"]`)
    console.log(data);

    return { props: { data } }
}