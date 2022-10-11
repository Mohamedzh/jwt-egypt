import Link from 'next/link'
import { ImArrowRight } from 'react-icons/im'
import { CalendarIcon, MapPinIcon, UsersIcon } from '@heroicons/react/20/solid'

const CareerSection = ({ data }) => {
  const jobVacancies = data.vacancies


  return (
    <div
      id="career"
      style={{
        backgroundColor: `${data.themeColors[0].careerSectionColor.color_code}`,
      }}
      className="md:px-20 lg:px-20 px-5 pb-5"
    >
      {/* <div className="collapse mx-20 my-10">
        <input type="checkbox" className="peer" />
        <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          Click me to show/hide content
        </div>
        <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
          <p>Accountant</p>
          <p>HR</p>
          <p>Production</p>
          <p>Media</p>
        </div>
      </div> */}
      <p
        style={{ color: `${data.themeColors[0].sectionTitleColor.color_code}` }}
        className="m-5 py-6 text-center text-3xl font-bold">
        Join our WunderWomen team
      </p>
      <p className="m-5 flex text-left text-lg font-bold text-wtPink">
        Latest vacancies
      </p>
      <div className="overflow-hidden bg-white shadow sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {jobVacancies.map((position, idx) => (
            <li key={idx}>
              <Link href="/careers">
                <a className="block hover:bg-gray-50">
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <p className="truncate text-sm font-medium text-indigo-600">
                        {position.title}
                      </p>
                      <div className="ml-2 flex flex-shrink-0">
                        <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                          {position.type}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-500">
                          <UsersIcon
                            className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          {position.department.title}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                          <MapPinIcon
                            className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          {position.location}
                        </p>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                        <CalendarIcon
                          className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <p>
                          Closing on{' '}
                          <time dateTime={position.close_date}>
                            {position.close_date}
                          </time>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Link href="/careers">
        <a>
          <p className="m-5 flex text-left text-base font-bold text-wtMediumRuby">
            Explore more career opportunities{' '}
            <ImArrowRight className="mt-1.5 ml-2" />
          </p>
        </a>
      </Link>
    </div>
  )
}

export default CareerSection
