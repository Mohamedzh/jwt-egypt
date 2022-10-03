import Head from 'next/head'
import NavigationBar from '../components/NavigationBar'
import HeroPage from '../components/HeroPage'
import InternShips from '../components/InternShips'
import ContactUs from '../components/contactUs'
import Footer from '../components/footerTab'
import WomenListSlide from '../components/womenListSlide'
import InspiringStories from '../components/InspiringStories'
import CareerSection from '../components/careerSection'
import VideoSlide from '../components/podcastSlide'
import { getClient } from '../lib/sanity'
import { validateHomePage } from '../lib/functions'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
export default function Index({ data }) {
  const router = useRouter()

  useEffect(() => {
    validateHomePage(getClient, { path: router.asPath })
  }, [])

  return (
    <div>
      <NavigationBar data={data} />
      <HeroPage data={data} />
      <WomenListSlide data={data} />
      <InspiringStories data={data} />
      <VideoSlide data={data} />

      <InternShips data={data} />

      <CareerSection data={data} />

      <ContactUs data={data} />
      <Footer data={data} />
    </div>
  )
}

export async function getStaticProps() {
  const JWTContact = await getClient(false).fetch(
    `*[_type == "contactUs"]{..., textColor->{color_code}}`
  )

  const quoteList = await getClient(false).fetch(
    `*[_type == "quote"]{body, person->{department->{title}, name, "imageUrl":image.asset->url, job_title}, color-> {name, color_code}} [0...4]`
  )

  const vacancies = await getClient(false).fetch(
    ` *[_type == "job"]{location, title, type, department->{title}, details}`
  )

  const stories = await getClient(false).fetch(
    `*[_type == "story"]{_id, name->{name, _id, facebook, twitter, instagram, "image":image.asset->url, job_title}}`
  )

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
  const header = await getClient(false).fetch(
    `*[_type == 'header']{heading, title, subtitle, buttonText, "imageUrl":heroImage.asset->url, textColor->}`
  )

  const videos = await getClient(false).fetch(
    `*[_type== 'video']{videoName, videoId, description}`
  )

  const internShips = await getClient(false).fetch(
    `*[_type == "internship"]{name->{name,_id,"image":image.asset->url},story}`
  )

  const navbarTheme = await getClient(false).fetch(
    `*[_type == "navbarTheme"]{"logo":logo.asset->url, buttonText, logoTextColor->{color_code}, menuTextColor->{color_code}, altText}`
  )

  const episodes = await getClient(false).fetch(
    `*[_type == "episodes" && type == "video"] | order(_createdAt desc)[0..2] {title, "url":media.asset->url, "imgUrl":image.asset->url, podcast->{title, "imageUrl":image.asset->url}, description}`
  )

  return {
    props: {
      data: {
        JWTContact,
        quoteList,
        vacancies,
        internShips,
        stories,
        themeColors,
        header,
        videos,
        navbarTheme,
        episodes,
      },
    },
  }
}
