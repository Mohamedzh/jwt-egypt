import Link from "next/link"
import { ImArrowRight } from "react-icons/im"
import { CalendarIcon, MapPinIcon, UsersIcon } from '@heroicons/react/20/solid'

const positions = [
  {
    id: 1,
    title: 'Back End Developer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
  },
  {
    id: 2,
    title: 'Front End Developer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Engineering',
    closeDate: '2020-01-07',
    closeDateFull: 'January 7, 2020',
  },
  {
    id: 3,
    title: 'User Interface Designer',
    type: 'Full-time',
    location: 'Remote',
    department: 'Design',
    closeDate: '2020-01-14',
    closeDateFull: 'January 14, 2020',
  },
]
const vacancies = [
  { title: "web developer", department: "IT", description: "Junior web developer required with experience in react and nextjs" },
  { title: "business development specialist", department: "marketing", description: "BD specialist needed with 5-7 years experience in the same position" },
  { title: "HR specialist", department: "HR", description: "HR specialist needed with past experience in a multinational company" },
  { title: "account manager", department: "Accounting", description: "account manager needed to perform accounting operations in the accounting deraptment" }
]

const CareerSection = ({ data }) => {


  return (
    <div className="mx-20">
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





      <p className="m-5 text-left text-2xl font-bold text-wtTango">
        Join our WunderWomen team
      </p>

      <p className="m-5 text-left text-lg font-bold text-wtPink flex">
        Latest vacancies
      </p>
      <div className="overflow-hidden bg-white shadow sm:rounded-md">
        <ul role="list" className="divide-y divide-gray-200">
          {positions.map((position, idx) => (
            <li key={idx}>
              <a href="#" className="block hover:bg-gray-50">
                <div className="px-4 py-4 sm:px-6">
                  <div className="flex items-center justify-between">
                    <p className="truncate text-sm font-medium text-indigo-600">{position.title}</p>
                    <div className="ml-2 flex flex-shrink-0">
                      <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                        {position.type}
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 sm:flex sm:justify-between">
                    <div className="sm:flex">
                      <p className="flex items-center text-sm text-gray-500">
                        <UsersIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                        {position.department}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                        <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                        {position.location}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <CalendarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                      <p>
                        Closing on <time dateTime={position.closeDate}>{position.closeDateFull}</time>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <Link href='/careers'>
        <a>
          <p className="m-5 text-left text-base font-bold text-wtMediumRuby flex">
            Explore more career opportunities <ImArrowRight className="mt-1.5 ml-2" />
          </p>
        </a>
      </Link>
    </div>
  )
}

export default CareerSection
