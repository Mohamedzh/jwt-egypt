import React, { useEffect, useState } from 'react'
import NavigationBar from '../../components/NavigationBar'
import { VacancyType } from '../../types '
import { getClient } from '../../lib/sanity'
import * as Yup from 'yup'
import 'yup-phone'
import { useFormik } from 'formik'
import { validateStories } from '../../lib/functions'
import { useRouter } from 'next/router'
import { ImArrowRight } from 'react-icons/im'
import { CalendarIcon, MapPinIcon, UsersIcon } from '@heroicons/react/20/solid'

const vacancies = [
  {
    id: '1',
    title: 'web developer',
    department: 'IT',
    location: 'Remote',
    closeDate: '2022 - 10 - 27',
    details:
      'Junior web developer required with experience in react and nextjs',
    type: 'Full-Time',
  },
  {
    id: '2',
    title: 'business development specialist',
    department: 'Marketing',
    location: '',
    closeDate: '2022 - 10 - 27',
    details:
      'BD specialist needed with 5-7 years experience in the same vacancy',
    type: 'Full-Time Internship',
  },
  {
    id: '3',
    title: 'HR specialist',
    department: 'HR',
    location: 'JWT Office',
    closeDate: '2022 - 10 - 27',
    details:
      'HR specialist needed with past experience in a multinational company',
    type: 'Full-Time Internship',
  },
  {
    id: '4',
    title: 'account manager',
    department: 'accounting',
    location: 'JWT Office',
    closeDate: '2022 - 10 - 27',
    details:
      'account manager needed to perform accounting operations in the accounting deraptment edmedmepod demdemd',
    type: 'Full-Time Internship',
  },
]

function Careers({ data }) {
  const router = useRouter()

  console.log(data.department)
  const vacanciess = data.vacancies
  const allDepartments = data.department

  const [filteredJobs, setFiltered] = useState<any[]>(vacancies)

  const filter = (department: string) => {
    if (department === 'Department') {
      setFiltered(vacancies)
    } else setFiltered(vacancies.filter((job) => job.department === department))
  }

  useEffect(() => { validateStories(getClient, { path: router.asPath }) }, [])


  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      LinkedInProfile: '',
      number: '',
      //   resume: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      email: Yup.string()
        .email('Please enter a valid email address')
        .required('Required'),
      LinkedInProfile: Yup.string().required('Required'),
      //   resume: Yup.string().required('Required'),
      number: Yup.string()
        .phone(
          'Egypt',
          true,
          'Please enter a valid mobile number starting with your region code (ex. +20 ) '
        )
        .required('Required'),
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

      <div className="p-10 ">
        <div className="mt-24 grid grid-cols-1 gap-4 pt-5 sm:grid-cols-2">
          <div>
            <div className=" mb-5 px-24  sm:w-auto">
              <label className="min-w-max px-4 pt-2" htmlFor="jobs">
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
                <option value="Department">Select department</option>
                {allDepartments.map((department) => (
                  <option value={`${department.title}`}>
                    {department.title}
                  </option>
                ))}
                {/* <option value="accounting">Accounting</option>
                <option value="hr">HR</option>
                <option value="marketing">Marketing</option>
                <option value="it">IT</option> */}
              </select>
            </div>

            <div className=" ">
              {filteredJobs.length === 0 && (
                <p className="mt-5 overflow-hidden bg-white text-center text-lg font-bold shadow sm:rounded-3xl">
                  No jobs match your selected criteria
                </p>
              )}
              <div role="list" className="divide-y divide-gray-200">
                {filteredJobs.map((vacancy, idx) => (
                  <div
                    key={idx}
                    className="m-4 overflow-hidden bg-white shadow hover:bg-gray-50 sm:rounded-3xl"
                  >
                    <div
                      className="collapse-plus collapse m-3 block hover:bg-gray-50"
                      tabIndex={0}
                    >
                      <div className=" collapse-title px-4 py-4 sm:px-6">
                        <div className="flex items-center justify-between">
                          <p className="truncate text-sm font-medium text-indigo-600">
                            {vacancy.title}
                          </p>
                          <div className="ml-4 flex flex-shrink-0">
                            <p className="mr-4 inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                              {vacancy.type}
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
                              {vacancy.department}
                            </p>
                            <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                              <MapPinIcon
                                className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                                aria-hidden="true"
                              />
                              {vacancy.location}
                            </p>
                          </div>
                          <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                            <CalendarIcon
                              className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                              aria-hidden="true"
                            />
                            <p>
                              Closing on{' '}
                              <time dateTime={vacancy.closeDate}>
                                {vacancy.closeDate}
                              </time>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="collapse-content">
                        <h2>Job Summary </h2>
                        <p>{vacancy.details}</p>
                        <h2>Responsibilities and Duties </h2>
                        <p>{vacancy.details}</p>
                        <h2>Qualifications and Skills </h2>
                        <p>{vacancy.details}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* <div
                    key={idx}
                    tabIndex={0}
                    className="collapse-plus collapse m-3 rounded-full border border-base-300 bg-white p-4"
                  >
                    <div className="collapse-title text-xl font-medium">
                      {vacancy.title}
                    </div>
                    <div className="collapse-content">
                      <p>{vacancy.details}</p>
                    </div>
                </div> */}
            </div>
          </div>

          <div>
            <form className="grid grid-cols-1 gap-y-6">
              <div className="overflow-hidden shadow sm:rounded-3xl">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <p className="pr-10 text-center text-2xl font-semibold">
                    Application
                  </p>
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
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.LinkedInProfile}
                        />
                      </div>
                      <div className="ml-px block  pl-4 text-sm  text-red-700">
                        {formik.touched.LinkedInProfile ? (
                          <p>{formik.errors.LinkedInProfile}</p>
                        ) : null}
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-6">
                      <label className="block pl-4 text-sm font-medium text-gray-700">
                        Resume
                      </label>
                      <div className=" flex w-full items-center justify-center ">
                        <label
                          htmlFor="dropzone-file"
                          className="bg-grey-500 dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
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
    ` *[_type == "job"]{location, title, type, department->{title}, job_summary, responsibilities, qualifications}`
  )
  const stories = await getClient(false).fetch(
    `*[_type == "story"]{name->{name},"image":image.asset->url,story,facebook,instagram,twitter}`
  )

  const themeColors = await getClient(false).fetch(
    `*[_type == "siteTheme"]{firstColor->{color_code}, secondColor->{color_code}}`
  )
  const navbarTheme = await getClient(false).fetch(
    `*[_type == "navbarTheme"]{"logo":logo.asset->url, buttonText, logoTextColor->{color_code}, menuTextColor->{color_code}, altText}`
  )

  const department = await getClient(false).fetch(
    `*[_type == "department"]{title}`
  )
  return {
    props: {
      data: {
        JWTContact,
        quoteList,
        vacancies,
        stories,
        themeColors,
        department,
        navbarTheme
      },
    },

  }
}
