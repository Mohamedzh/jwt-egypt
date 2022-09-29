import { getClient } from '../../lib/sanity'
import { InspStories } from '../../types '
const Story = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 py-10">
          <div className="lg:-mx-6 lg:flex lg:items-center">
            <img
              className="h-96 w-full rounded-lg object-cover object-center lg:mx-6 lg:h-[36rem] lg:w-1/2"
              src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />

            <div className="mt-8 lg:mt-0 lg:w-1/2 lg:px-6">
              <p className="text-5xl font-semibold text-blue-500 ">“</p>

              <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:w-96 xl:text-4xl">
                Help us improve our productivity
              </h1>

              <p className="mt-6 max-w-lg text-gray-500 dark:text-gray-400 ">
                “ Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore quibusdam ducimus libero ad tempora doloribus expedita
                laborum saepe voluptas perferendis delectus assumenda rerum,
                culpa aperiam dolorum, obcaecati corrupti aspernatur a. ”
              </p>

              <h3 className="mt-6 text-lg font-medium text-blue-500">
                Mia Brown
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Marketing Manager at Stech
              </p>

              <div className="mt-12 flex items-center justify-between lg:justify-start">
                <button className="rounded-full border p-2 text-gray-800 transition-colors duration-300 hover:bg-gray-100 rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
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
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Story

export async function getStaticPaths() {
  const stories = await getClient(false).fetch(
    `*[_type == "story"]{name->{name},"image":image.asset->url,story,facebook,instagram,twitter}`
  )
  const paths = stories.map((story: InspStories) => {
    return {
      params: {
        name: story.name.name,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  console.log(params)
  let fName = params.name
  const stories = await getClient(false).fetch(
    `*[_type == "article" && fName == '${fName}*' ]{name->{name},story}`
  )
  console.log('from story: ', stories)

  return { props: { data: { params } } }
}

/**
  export const getStaticPaths = async () => {
  const res = await fetch(`http://localhost:3000/api/products`)
  const data = await res.json()
  
  const paths = data.map((product: any) => {    
    return {
      params: {
        id: product.id,
      },
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (context: any) => {
  const res = await fetch(
    `http://localhost:3000/api/products/${context.params.id}`
  )
  const data = await res.json()
  console.log(data)

  return {
    props: {
      product: data,
    },
  }
}
 */
