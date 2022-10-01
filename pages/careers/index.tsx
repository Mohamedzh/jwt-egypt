import React, { useState } from 'react'
import NavigationBar from '../../components/NavigationBar'
import { VacancyType } from '../../types '
import client, { getClient, previewClient } from '../../lib/sanity'
import * as Yup from 'yup'
import 'yup-phone'
import { useFormik } from 'formik'

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

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      // number: '',
      // message: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      email: Yup.string()
        .email('Please enter a valid email address')
        .required('Required'),
      // number: Yup.string()
      //   .phone(
      //     'Egypt',
      //     true,
      //     'Please enter a valid mobile number starting with your region code (ex. +20 ) '
      //   )
      //   .required('Required'),
      // message: Yup.string(),
    }),
    onSubmit: () => {
      // console.log(values)
      //api call
      // formik.resetForm
      //navigate to top or show a pop up message
    },
  })

  return (
    <div>
      <NavigationBar data={data} />

      <div className="p-10">
        <div className="mt-24 grid grid-cols-1 gap-4 pt-5 sm:grid-cols-2">
          <div>
            <div className=" px-24  sm:w-auto">
              <label className="min-w-max pt-2 px-4" htmlFor="jobs">
                Department
              </label>
              <select
                className="block w-full rounded-full border-gray-300 bg-gray-50 pl-4  text-black focus:border-black focus:ring-black sm:text-sm"
                placeholder="Select department"
                name="jobs"
                id="jobs"
                onChange={(e) => {
                  filter(e.currentTarget.value)
                }}
              >
                <option value="Department" >Select department</option>
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
                  className="collapse-plus collapse rounded-full p-4 m-3 border border-base-300 bg-white"
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

          <div>
            <form className="grid grid-cols-1 gap-y-6">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <p className="font-semibold text-2xl text-center pr-10">Application</p>
                  <div className="grid grid-cols-6 gap-6 py-5 ">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="firstName"
                        className="ml-px block  pl-4 text-sm font-medium text-gray-700"
                      >
                        First Name
                      </label>
                      <div className="relative mt-1 rounded-full shadow-sm">
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          className="block w-full rounded-full border-gray-300 bg-gray-50 pl-4  text-black focus:border-black focus:ring-black sm:text-sm"
                          placeholder="First Name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.firstName}
                        />
                      </div>
                      <div className="ml-px block  pl-4 text-sm  text-red-700">
                        {formik.touched.firstName ? (
                          <p>{formik.errors.firstName}</p>
                        ) : null}
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="lastName"
                        className="ml-px block  pl-4 text-sm font-medium text-gray-700"
                      >
                        Last Name
                      </label>
                      <div className="relative mt-1 rounded-full shadow-sm">
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          className="block w-full rounded-full border-gray-300 bg-gray-50 pl-4  text-black focus:border-black focus:ring-black sm:text-sm"
                          placeholder="Last Name"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.lastName}
                        />
                      </div>
                      <div className="ml-px block  pl-4 text-sm  text-red-700">
                        {formik.touched.lastName ? (
                          <p>{formik.errors.lastName}</p>
                        ) : null}
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email"
                        className="block pl-4 text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <div>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          autoComplete="email"
                          className="mt-1 block w-full rounded-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Email "
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.email}
                        />
                      </div>
                      <div className="ml-px block  pl-4 text-sm  text-red-700">
                        {formik.touched.email ? (
                          <p>{formik.errors.email}</p>
                        ) : null}
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="LinkedInProfile"
                        className="block pl-4 text-sm font-medium text-gray-700"
                      >
                        LinkedIn Profile
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center rounded-l-full border border-r-0 border-gray-300 bg-gray-50 px-3 pl-4 text-sm text-gray-500">
                          http://
                        </span>
                        <input
                          type="text"
                          name="LinkedInProfile"
                          id="LinkedInProfile"
                          className="block w-full flex-1 rounded-none rounded-r-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="www.linkedIn.com"
                        />
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-6">
                      <label className="block pl-4 text-sm font-medium text-gray-700">
                        Resume
                      </label>
                      <div className=" flex w-full items-center justify-center ">
                        <label
                          htmlFor="dropzone-file"
                          className="bg-grey-500 dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-full border-2 border-dashed border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                              aria-hidden="true"
                              className="mb-3 h-10 w-10 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                              ></path>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                              <span className="font-semibold">
                                Click to upload
                              </span>{' '}
                              or drag and drop
                            </p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">
                              PDF
                            </p>
                          </div>
                          <input
                            id="dropzone-file"
                            type="file"
                            className="hidden"
                          />
                        </label>
                      </div>
                    </div>

                    {/* <div className="col-span-6 sm:col-span-3">
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
                    </div> */}
                  </div>
                </div>

                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-full border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => formik.handleSubmit()}
                  >
                    Apply Now
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
