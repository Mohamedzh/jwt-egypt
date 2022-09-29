import Link from 'next/link'
import { BsFacebook, BsTwitter } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { InspStories } from '../types '

const InspiringStory = ({ story }: { story: InspStories }) => {
  // function urlFor(source: string) {
  //   const builder = imageUrlBuilder(sanityClient);
  //   return builder.image(source);
  // }

  return (
    <div
      role="listitem"
      className="relative mt-16 mb-32 sm:mb-24 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 xl:max-w-sm"
    >
      <div className="overflow-hidden rounded bg-white shadow-md">
        <div className="absolute -mt-20 flex w-full justify-center">
          <div className="h-32 w-32">
            <img
              src={story.name.image}
              role="img"
              className="h-full w-full rounded-full object-cover shadow-md"
            />
          </div>
        </div>
        <div className="mt-16 px-6">
          <Link href={`/story/${story._id}`}>
            <a>
              <h1 className="mb-1 text-center text-3xl font-bold">
                {story.name.name}
              </h1>
              <p className="text-center text-sm text-gray-800">
                {story.name.job_title}
              </p>
              <p className="pt-3 text-center text-base font-normal text-gray-600">
                {story.story}
              </p>
            </a>
          </Link>
          <div className="flex w-full justify-center pt-5 pb-5">
            <Link href={story.name.facebook}>
              <a className="mx-5">
                <div aria-label={story.name.facebook} role="img">
                  <BsFacebook />
                </div>
              </a>
            </Link>
            <Link href={story.name.twitter}>
              <a className="mx-5">
                <div aria-label={story.name.twitter} role="img">
                  <BsTwitter />
                </div>
              </a>
            </Link>
            <Link href={story.name.instagram}>
              <a className="mx-5">
                <div aria-label={story.name.instagram} role="img">
                  <AiFillInstagram />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InspiringStory
