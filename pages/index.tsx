
import Head from 'next/head'
import NavigationBar from '../components/NavigationBar'
import HeroPage from '../components/HeroPage'
import InternShips from '../components/InternShips'
import ContactUs from '../components/contactUs'
import Footer from '../components/footerTab'
import WomenListSlide from '../components/womenListSlide'
import InspiringStories from '../components/InspiringStories'
// import InternShips2 from '../components/InternShips2'
import CareerSection from '../components/careerSection'
import { getClient } from '../lib/sanity'
import NewWomenSlide from '../components/newSlide'
import VideoSlide from '../components/videoSlide'

export default function Index({ allPosts, preview, data }) {
  // const heroPost = allPosts[0]
  // const morePosts = allPosts.slice(1)
  return (
    <>
      {/* <Layout preview={preview}>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>
          <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout> */}

      <NavigationBar data={data} />
      <HeroPage data={data} />
      <NewWomenSlide data={data} />
      <VideoSlide data={data} />

      <WomenListSlide data={data} />
      <InternShips />
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
    `*[_type == "quote"]{body, person->{department->{title}, name, "imageUrl":image.asset->url, job_title}, color-> {name, color_code}} [0...4]`)
  const vacancies = await getClient(false).fetch(`*[_type == "job"]{location, title, type, details}`)
  const stories = await getClient(false).fetch(`*[_type == "story"]{name->{name},"image":image.asset->url,story,facebook,instagram,twitter}`)
  const themeColors = await getClient(false).fetch(`*[_type == "siteTheme"]{firstColor->{color_code}, secondColor->{color_code}}`)
  const header = await getClient(false).fetch(`*[_type == 'header']{heading, title, subtitle, buttonText, "imageUrl":heroImage.asset->url}`)
  return { props: { data: { JWTContact, quoteList, vacancies, stories, themeColors, header } } }

}


