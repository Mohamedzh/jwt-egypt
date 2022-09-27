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
              <a href={contact.url} key={idx} className="mx-5">
                <div aria-label={contact.name} role="img">
                  <svg
                    xmlns={contact.url}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#718096"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InspiringStory
