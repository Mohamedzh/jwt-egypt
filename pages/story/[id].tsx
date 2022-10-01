import Footer from '../../components/footerTab'
import NavigationBar from '../../components/NavigationBar'
import { getClient } from '../../lib/sanity'
import { InspStories } from '../../types '

const Story = ({ data }: { data: any }) => {
  const { story } = data
  return (
    <div>
      <NavigationBar data={data} />
      <section className="bg-white dark:bg-gray-900 md:px-24 lg:px24 py-24">
        <div className="container mx-auto px-6 py-10">
          <div className="lg:-mx-6 lg:flex lg:items-center">
            <img
              className="h-96 w-full rounded-lg object-cover object-center lg:mx-6 lg:h-[36rem] "
              src={story[0].name.image}
              alt="alt"
            />
            {/* <div className='image-border w-full lg:w-1/2 mr-10'>
            </div> */}
            {/* <div className='border border-solid h-screen mx-5'></div> */}
            <div className="mt-8 lg:mt-0 lg:w-1/2 lg:px-6">
              {/* <p className="text-5xl font-semibold text-blue-500 ">“</p> */}

              <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:w-96 xl:text-4xl">
                {story[0].name.name}              </h1>

              <p className="mt-6 max-w-lg text-gray-500 dark:text-gray-400 ">
                {story[0].story}
              </p>

              <h3 className="mt-6 text-lg font-medium text-blue-500">
                {story[0].name.job_title}

              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {story[0].name.department.title}

              </p>

              {/* <div className="mt-12 flex items-center justify-between lg:justify-start">
                <button className="rounded-full border p-2 text-gray-800 transition-colors duration-300 hover:bg-gray-100 rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button className="rounded-full border p-2 text-gray-800 transition-colors duration-300 hover:bg-gray-100 rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <Footer data={data} />
    </div>
  )
}

export default Story

export async function getStaticPaths() {
  const stories = await getClient(false).fetch(
    `*[_type == "story"]`
  )
  const paths = stories.map((story: InspStories) => {

    return {
      params: {
        id: story._id,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  let id = params.id
  const story = await getClient(false).fetch(
    `*[_type == "story" && _id == $id]{story, name->{name, job_title, department->{title}, facebook, twitter, instagram, "image":image.asset->url}}`, { id }
  )
  const themeColors = await getClient(false).fetch(
    `*[_type == "siteTheme"]{firstColor->{color_code},
     secondColor->{color_code},
     quotesSectionColor->{color_code},
     videoSectionColor->{color_code},
     storiesSectionColor->{color_code},
     internSectionColor->{color_code},
     careerSectionColor->{color_code}
    }`
  )
  const JWTContact = await getClient(false).fetch(`*[_type == "contactUs"]`)

  return { props: { data: { story, themeColors, JWTContact } } }
}
