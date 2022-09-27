import Link from 'next/link'
import { BsFacebook } from 'react-icons/bs'
import { InspStories } from '../types '

const InspiringStory = ({ inspStory }: { inspStory: InspStories }) => {
  return (
    <div
      role="listitem"
      className="relative mt-16 mb-32 sm:mb-24 sm:w-3/4 md:w-2/5 lg:w-2/5 xl:w-1/3 xl:max-w-sm"
    >
      <div className="overflow-hidden rounded bg-white shadow-md">
        <div className="absolute -mt-20 flex w-full justify-center">
          <div className="h-32 w-32">
            <img
              src={inspStory.image.img}
              alt={inspStory.image.alt}
              role="img"
              className="h-full w-full rounded-full object-cover shadow-md"
            />
          </div>
        </div>
        <div className="mt-16 px-6">
          <h1 className="mb-1 text-center text-3xl font-bold">
            {inspStory.name}
          </h1>
          <p className="text-center text-sm text-gray-800">{inspStory.job}</p>
          <p className="pt-3 text-center text-base font-normal text-gray-600">
            {inspStory.jobDisc}
          </p>
          <div className="flex w-full justify-center pt-5 pb-5">
            {inspStory.contact.map((contact, idx) => (
              <Link href={contact.url}>
                <a key={idx} className="mx-5">
                  <div aria-label={contact.name} role="img">
                    <contact.icon className="h-6 w-6" aria-hidden="true"/>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InspiringStory
