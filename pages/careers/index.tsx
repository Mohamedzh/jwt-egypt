import React, { useCallback, useEffect, useState, Fragment } from 'react'
import NavigationBar from '../../components/NavigationBar'
import { VacancyType } from '../../types '
import { getClient } from '../../lib/sanity'
import * as Yup from 'yup'
import 'yup-phone'
import { useFormik } from 'formik'
import { scrollToSection, validateStories } from '../../lib/functions'
import { useRouter } from 'next/router'
import { ImArrowRight } from 'react-icons/im'
import { CalendarIcon, MapPinIcon, UsersIcon } from '@heroicons/react/20/solid'
import BlockContent from '@sanity/block-content-to-react'
import { CCollapse } from '@coreui/react'
import { useDropzone } from 'react-dropzone'
import { BsFillFolderFill } from 'react-icons/bs'
import Dropzone from 'react-dropzone'
import { supabase } from '../../lib/supabaseClient'
import { Menu, Transition } from '@headlessui/react'
import { useAppSelector } from '../../redux/hooks'

function Careers({ data }) {
  const router = useRouter()
  console.log(data.career[0].formTextColor);

  const career = useAppSelector((state) => state.career.career)
  console.log(career)

  const vacancies = data.vacancies
  const allDepartments = data.department

  const [filteredJobs, setFiltered] = useState<any[]>(vacancies)

  const [jobChosen, setJobChosen] = useState('')

  const filter = (department: string) => {
    if (department === 'Department') {
      setFiltered(vacancies)
    } else
      setFiltered(
        vacancies.filter((job) => job.department.title === department)
      )
  }

  useEffect(() => {
    validateStories(getClient, { path: router.asPath })
    if (career != '') {
      scrollToSection(`${career}`)
    }
  }, [])

  const applicationApi = async (values) => {
    try {
      const { resume, coverLetter } = values
      const { data: resumeUrl, error: error1 } = await supabase.storage
        .from('resume-url')
        .upload(`${Date.now()}_${values.firstName}`, resume)
      console.log(values.resume.name)

      const { data: coverLetterUrl, error: error2 } = await supabase.storage
        .from('cover-letter')
        .upload(`${Date.now()}_${values.lastName}`, coverLetter)
      console.log(values.coverLetter.name)

      const url = resumeUrl.Key.split('/')
      const newUrl = url[url.length - 1]
      const { publicURL: publicURL2 } = supabase.storage
        .from('resume-url')
        .getPublicUrl(`${newUrl}`)

      const coveUrl = coverLetterUrl.Key.split('/')
      const newUrl2 = coveUrl[coveUrl.length - 1]
      const { publicURL: otherUrl } = supabase.storage
        .from('cover-letter')
        .getPublicUrl(`${newUrl2}`)

      const { data: data2, error: error3 } = await supabase
        .from('Application')
        .upsert({
          firstName: `${values.firstName}`,
          lastName: `${values.lastName}`,
          email: `${values.email}`,
          linkedInProfile: `${values.linkedInProfile}`,
          number: `${values.number}`,
          position: `${values.position}`,
          resume: `${publicURL2}`,
          coverLetter: `${otherUrl}`,
        })
    } catch (e) {
      console.log(e)
    }
  }

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      linkedInProfile: '',
      number: '',
      position: jobChosen,
      resume: '',
      coverLetter: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),

      // position: Yup.string().when('position', (position) => {
      //   if (position == '') return Yup.string().required()
      // }),

      position: Yup.string().required('Required'),

      email: Yup.string()
        .email('Please enter a valid email address')
        .required('Required'),

      resume: Yup.string().required('Required'),
      coverLetter: Yup.string().required('Required'),
      number: Yup.string()
        .phone(
          'Egypt',
          true,
          'Please enter a valid mobile number starting with your region code (ex. +20 ) '
        )
        .required('Required'),
    }),
    onSubmit: (values) => {
      applicationApi(values)
      console.log(values)
      formik.resetForm
    },
  })

  return (
    <div>
      <NavigationBar data={data} />

      <div className="p-10 ">
        <div className="mt-24 grid grid-cols-1 gap-y-6">
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
                <option value="Department">All vacancies</option>
                {allDepartments.map((department, indx) => (
                  <option key={indx} value={`${department.title}`}>
                    {department.title}
                  </option>
                ))}
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
                    id={`${vacancy.title}`}
                    key={idx}
                    className="m-4 overflow-hidden bg-gray-50 shadow hover:bg-gray-100 sm:rounded-3xl scroll-mt-32"
                  >
                    <div
                      className="  m-3 block bg-gray-50 hover:bg-gray-100"
                      tabIndex={0}
                    >
                      <details {...(vacancy.title == career && { open: true })} >
                        {/* title */}
                        {/* <summary className="bg-inherit px-5 py-3 text-lg cursor-pointer"> */}
                        <summary className="cursor-pointer  px-4 py-4 sm:px-6">
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
                                {vacancy.department.title}
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
                                Closing on
                                <time dateTime={vacancy.close_date}>
                                  {` ${vacancy.close_date}`}
                                </time>
                              </p>
                            </div>
                          </div>
                        </summary>
                        {/* </summary> */}

                        {/* collapse content */}
                        <div className="">
                          <BlockContent blocks={vacancy.details} />
                          <div className="bg-gray-100 px-4 py-3 text-right sm:px-6">
                            <button
                              className="inline-flex justify-center rounded-full border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              onClick={() => {
                                setJobChosen(vacancy.title)
                                formik.setFieldValue('position', vacancy.title)
                                scrollToSection('applicationForm')
                              }}
                              style={{
                                background: `linear-gradient(90deg, ${data.themeColors[0].firstColor.color_code} 0%, ${data.themeColors[0].secondColor.color_code} 100%)`,
                              }}
                            >
                              Apply Now
                            </button>
                          </div>
                        </div>
                      </details>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <section id="applicationForm" className="scroll-mt-24">
            <form className="grid grid-cols-1 gap-y-6">
              <div className="overflow-hidden shadow sm:rounded-3xl">
                <div
                  className="bg-white px-4 py-5 sm:p-6"
                  style={{
                    background: `linear-gradient(90deg, ${data.themeColors[0].firstColor.color_code} 0%, ${data.themeColors[0].secondColor.color_code} 100%)`,
                  }}
                >
                  <p
                    style={{ color: `${data.career[0].formTextColor.color_code}` }}
                    className="pr-10 text-center text-2xl font-semibold">
                    Application
                  </p>
                  <div className="grid grid-cols-6 gap-6 py-5 ">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        style={{ color: `${data.career[0].formTextColor.color_code}` }}
                        htmlFor="firstName"
                        className="ml-px block  pl-4 text-sm font-medium"
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
                        style={{ color: `${data.career[0].formTextColor.color_code}` }}
                        htmlFor="lastName"
                        className="ml-px block  pl-4 text-sm font-medium"
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

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        style={{ color: `${data.career[0].formTextColor.color_code}` }}
                        htmlFor="email"
                        className="block pl-4 text-sm font-medium"
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

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        style={{ color: `${data.career[0].formTextColor.color_code}` }}
                        htmlFor="linkedInProfile"
                        className="block pl-4 text-sm font-medium"
                      >
                        LinkedIn Profile
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center rounded-l-full border border-r-0 border-gray-300 bg-gray-50 px-3 pl-4 text-sm text-gray-500">
                          http://
                        </span>
                        <input
                          type="text"
                          name="linkedInProfile"
                          id="linkedInProfile"
                          className="block w-full flex-1 rounded-none rounded-r-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="www.linkedIn.com"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.linkedInProfile}
                        />
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        style={{ color: `${data.career[0].formTextColor.color_code}` }}
                        htmlFor="position"
                        className="block pl-4 text-sm font-medium"
                      >
                        Position
                      </label>
                      <select
                        id="position"
                        name="position"
                        autoComplete="job-title"
                        className="mt-1 block w-full rounded-full border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.position}
                      >
                        <option selected value={jobChosen}>
                          {jobChosen}
                        </option>
                        {vacancies.map((vacancy, indx) => (
                          <option
                            key={indx}
                            value={`${vacancy.title}`}
                            label={`${vacancy.title}`}
                          >
                            {vacancy.title}
                          </option>
                        ))}
                      </select>
                      <div className="ml-px block  pl-4 text-sm  text-red-700">
                        {formik.touched.position ? (
                          <p>{formik.errors.position}</p>
                        ) : null}
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        style={{ color: `${data.career[0].formTextColor.color_code}` }}
                        htmlFor="number"
                        className="ml-px block  pl-4 text-sm font-medium"
                      >
                        Phone
                      </label>
                      <div className="relative mt-1 rounded-full shadow-sm">
                        <input
                          type="text"
                          name="number"
                          id="number"
                          className="block w-full rounded-full border-gray-300 bg-gray-50 pl-4  text-black focus:border-black focus:ring-black sm:text-sm"
                          placeholder="+201287634938"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.number}
                        />
                      </div>
                      <div className="ml-px block  pl-4 text-sm  text-red-700">
                        {formik.touched.number ? (
                          <p>{formik.errors.number}</p>
                        ) : null}
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        style={{ color: `${data.career[0].formTextColor.color_code}` }}
                        className="block pl-4 text-sm font-medium">
                        Resume
                      </label>
                      <div className="ml-px block  pl-4 text-sm  text-red-700">
                        {formik.touched.resume && formik.errors.resume ? (
                          <p>{formik.errors.resume}</p>
                        ) : null}
                      </div>

                      <div className=" flex w-full items-center justify-center ">
                        <label
                          htmlFor="resume"
                          className="bg-grey-500 dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:bg-black dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                          <Dropzone
                            onDrop={useCallback((acceptedFiles) => {
                              return (
                                <div>
                                  {acceptedFiles.map((file) => {
                                    const reader = new FileReader()
                                    reader.readAsDataURL(file)
                                    formik.setFieldValue('resume', file)
                                    return file
                                  })}
                                </div>
                              )
                            }, [])}
                          >
                            {({
                              getRootProps,
                              getInputProps,
                              acceptedFiles,
                            }) => (
                              <section>
                                <div
                                  className="flex flex-col items-center justify-center pt-5 pb-6"
                                  {...getRootProps()}
                                >
                                  <svg
                                    aria-hidden="true"
                                    className="mb-3 h-10 w-10 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
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
                                  <input
                                    {...getInputProps()}
                                    id="resume"
                                    type="file"
                                    name="resume"
                                  />
                                </div>
                                <div>
                                  {acceptedFiles.map((file) => (
                                    <div className="flex ">
                                      <BsFillFolderFill
                                        className="mr-3"
                                        style={{
                                          fill: `${data.themeColors[0].firstColor.color_code}`,
                                        }}
                                      />
                                      <p className="">{file.name}</p>
                                    </div>
                                  ))}
                                </div>
                              </section>
                            )}
                          </Dropzone>
                        </label>
                      </div>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        style={{ color: `${data.career[0].formTextColor.color_code}` }}
                        className="block pl-4 text-sm font-medium">
                        Cover Letter
                      </label>
                      <div className="ml-px block  pl-4 text-sm  text-red-700">
                        {formik.touched.coverLetter &&
                          formik.errors.coverLetter ? (
                          <p>{formik.errors.coverLetter}</p>
                        ) : null}
                      </div>

                      <div className=" flex w-full items-center justify-center ">
                        <label
                          htmlFor="coverLetter"
                          className="bg-grey-500 dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:bg-black dark:hover:border-gray-500 dark:hover:bg-gray-600"
                        >
                          <Dropzone
                            onDrop={useCallback((acceptedFiles) => {
                              return (
                                <div>
                                  {acceptedFiles.map((file) => {
                                    const reader = new FileReader()
                                    reader.readAsDataURL(file)
                                    formik.setFieldValue('coverLetter', file)
                                    return file
                                  })}
                                </div>
                              )
                            }, [])}
                          >
                            {({
                              getRootProps,
                              getInputProps,
                              acceptedFiles,
                            }) => (
                              <section>
                                <div
                                  className="flex flex-col items-center justify-center pt-5 pb-6"
                                  {...getRootProps()}
                                >
                                  <svg
                                    aria-hidden="true"
                                    className="mb-3 h-10 w-10 text-gray-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
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
                                  <input
                                    {...getInputProps()}
                                    id="coverLetter"
                                    type="file"
                                    name="coverLetter"
                                  />
                                </div>
                                <div>
                                  {acceptedFiles.map((file) => (
                                    <div className="flex ">
                                      <BsFillFolderFill
                                        className="mr-3"
                                        style={{
                                          fill: `${data.themeColors[0].firstColor.color_code}`,
                                        }}
                                      />
                                      <p className="">{file.name}</p>
                                    </div>
                                  ))}
                                </div>
                              </section>
                            )}
                          </Dropzone>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-100 px-4 py-3 text-right sm:px-6">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-full border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => formik.handleSubmit()}
                    style={{
                      background: `linear-gradient(90deg, ${data.themeColors[0].firstColor.color_code} 0%, ${data.themeColors[0].secondColor.color_code} 100%)`,
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </section>
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
    ` *[_type == "job"]{location, title, type, department->{title}, details, close_date}`
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

  const career = await getClient(false).fetch(
    `*[_type == "careersPage"]{formTextColor->{color_code}}`
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
        navbarTheme,
        career
      },
    },
  }
}
