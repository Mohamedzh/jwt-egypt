import Head from 'next/head'
import NavigationBar from '../components/NavigationBar'
import HeroPage from '../components/HeroPage'
import InternShips from '../components/InternShips'
import ContactUs from '../components/contactUs'
import Footer from '../components/footerTab'
import WomenListSlide from '../components/womenListSlide'
import InspiringStories from '../components/InspiringStories'
import CareerSection from '../components/careerSection'
import NewWomenSlide from '../components/newSlide'
import VideoSlide from '../components/videoSlide'
import { getClient } from '../lib/sanity'

export default function Index({ data }) {
  return (
    <>
      <NavigationBar data={data} />
      <HeroPage data={data} />
      <NewWomenSlide data={data} />
      <VideoSlide data={data} />

      <WomenListSlide data={data} />
      <InternShips data={data} />
      <InspiringStories data={data} />

      <CareerSection data={data} />
      <ContactUs data={data} />
      <Footer data={data} />
    </>
  )
}

// export async function getStaticProps({ preview = false }) {
//   const allPosts = await getAllPostsForHome(preview)
//   return {
//     props: { allPosts, preview },
//     revalidate: 1,
//   }
// }

export async function getStaticProps() {
  const JWTContact = await getClient(false).fetch(`*[_type == "contactUs"]`)
  const quoteList = await getClient(false).fetch(
    `*[_type == "quote"]{body, person->{department->{title}, name, "imageUrl":image.asset->url, job_title}, color-> {name, color_code}} [0...4]`
  )
  const vacancies = await getClient(false).fetch(
    `*[_type == "job"]{location, title, type, details}`
  )
  const internShips = await getClient(false).fetch(
    `*[_type == "internShip"]{name->{name,_id,"image":image.asset->url},story}`
  )

  const stories = await getClient(false).fetch(
    `*[_type == "story"]{name->{name,_id,"image":image.asset->url,facebook,instagram,twitter},story}`
  )
  const themeColors = await getClient(false).fetch(
    `*[_type == "siteTheme"]{firstColor->{color_code}, secondColor->{color_code}}`
  )
  const header = await getClient(false).fetch(
    `*[_type == 'header']{heading, title, subtitle, buttonText, "imageUrl":heroImage.asset->url}`
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
      },
    },
  }
}
