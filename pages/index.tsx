import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'
import NavigationBar from '../components/NavigatoinBar'
import HeroPage from '../components/HeroPage'
import InternShips from '../components/InternShips'
import ContactUs from '../components/contactUs'
import Footer from '../components/footerTab'
import WomenListSlide from '../components/womenListSlide'
import InspiringStories from '../components/InspiringStories'
// import InternShips2 from '../components/InternShips2'
import CareerOpportunities from '../components/CareerOpportunities'
import Career2 from '../components/Career2'
import { getClient } from '../lib/sanity'

export default function Index({ allPosts, preview, data }) {
  console.log('stories: ', data.stories)
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

      <NavigationBar />
      <HeroPage />
      <WomenListSlide />
      <InternShips />
      <InspiringStories data={data} />

      {/* <CareerOpportunities /> */}

      <Career2 />
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
  //   const contactUsFields = `
  // address,
  // governorate,
  // postalCode,
  // phone,
  // email

  // `
  const JWTContact = await getClient(false).fetch(`*[_type == "contactUs"]`)
  const stories = await getClient(false).fetch(`*[_type == "story"]{name->{name},"image":image.asset->url,story,facebook,instagram,twitter}`)

  return { props: { data: { JWTContact, stories } } }
}
