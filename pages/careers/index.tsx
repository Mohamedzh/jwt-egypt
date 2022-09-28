import React, { useState } from 'react'
import NavigationBar from '../../components/NavigationBar'
import { VacancyType } from '../../types '
import client, { getClient, previewClient } from '../../lib/sanity'

const vacancies = [
  {
    title: 'web developer',
    department: 'it',
    description:
      'Junior web developer required with experience in react and nextjs',
  },
  {
    title: 'business development specialist',
    department: 'marketing',
    description:
      'BD specialist needed with 5-7 years experience in the same position',
  },
  {
    title: 'HR specialist',
    department: 'hr',
    description:
      'HR specialist needed with past experience in a multinational company',
  },
  {
    title: 'account manager',
    department: 'accounting',
    description:
      'account manager needed to perform accounting operations in the accounting deraptment',
  },
]

function Careers({ data }) {
  const [filteredJobs, setFiltered] = useState<VacancyType[]>(vacancies)
  const filter = (department: string) => {
    if (department === 'Department') {
      setFiltered(vacancies)
    } else setFiltered(vacancies.filter((job) => job.department === department))
  }

  return (
    <div>
      <NavigationBar data={data} />

      <div className="p-10">
        <div className="grid grid-cols-1 mt-24 gap-4 pt-5 sm:grid-cols-2">
          <div>
            <div className="mx-20  sm:w-auto">
              <label className="min-w-max pt-2 font-bold" htmlFor="jobs">
                Choose the department
              </label>
              <select
                className="mx-5 w-full px-5"
                placeholder="Department"
                name="jobs"
                id="jobs"
                onChange={(e) => {
                  filter(e.currentTarget.value)
                }}
              >
                <option value="Department">Department...</option>
                <option value="accounting">Accounting</option>
                <option value="hr">HR</option>
                <option value="marketing">Marketing</option>
                <option value="it">IT</option>
              </select>
            </div>
            <div>
              {filteredJobs.length === 0 && (
                <p className="mt-5 text-center text-lg font-bold">
                  No jobs match your selected criteria
                </p>
              )}
              {filteredJobs.map((vacancy, idx) => (
                <div
                  key={idx}
                  tabIndex={0}
                  className="collapse-plus collapse rounded-box m-3 border border-base-300 bg-wtCyan"
                >
                  <div className="collapse-title text-xl font-medium">
                    {vacancy.title}
                  </div>
                  <div className="collapse-content">
                    <p>{vacancy.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="">
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="last-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Street address
                      </label>
                      <input
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium text-gray-700"
                      >
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        ZIP / Postal code
                      </label>
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Careers

export async function getStaticProps() {
  const JWTContact = await getClient(false).fetch(`*[_type == "contactUs"]`)
  const quoteList = await getClient(false).fetch(
    `*[_type == "quote"]{body, person->{department->{title}, name, "imageUrl":image.asset->url, job_title}, color-> {name, color_code}}`
  )
  const vacancies = await getClient(false).fetch(
    `*[_type == "job"]{location, title, type, details}`
  )
  const stories = await getClient(false).fetch(
    `*[_type == "story"]{name->{name},"image":image.asset->url,story,facebook,instagram,twitter}`
  )
  const themeColors = await getClient(false).fetch(
    `*[_type == "siteTheme"]{firstColor->{color_code}, secondColor->{color_code}}`
  )

  return {
    props: { data: { JWTContact, quoteList, vacancies, stories, themeColors } },
  }
}
