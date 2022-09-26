import {
  EnvelopeIcon,
  PhoneIcon,
  ChatBubbleBottomCenterIcon,
} from '@heroicons/react/24/outline'
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import 'yup-phone'
import { BsPerson } from 'react-icons/bs'

export default function ContactUs() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      number: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string()
        .email('Please enter a valid email address')
        .required('Required'),
      number: Yup.string()
        .phone(
          'Egypt',
          true,
          'Please enter a valid mobile number starting with your region code (ex. +20 ) '
        )
        .required('Required'),
      message: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log(values)
      //api call
      // formik.resetForm
      //navigate to top or show a pop up message
    },
  })

  return (
    <>
      <div className="contactBorder">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      <div className="relative">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
        </div>
        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
          <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="mx-auto max-w-lg">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Get in touch
              </h2>
              <dl className="mt-8 text-base text-gray-500">
                <div>
                  <dt className="sr-only">Postal address</dt>
                  <dd>
                    <p>6 Ibn Zinky St, Al Gabalayah, Zamalek, </p>
                    <p>Cairo Governorate 4270131</p>
                  </dd>
                </div>
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                    <PhoneIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">+1 (555) 123-4567</span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <EnvelopeIcon
                      className="h-6 w-6 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">support@example.com</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
            <div className="mx-auto max-w-lg lg:max-w-none">
              <form className="grid grid-cols-1 gap-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="ml-px block  pl-4 text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <div className="relative mt-1 rounded-full shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <BsPerson
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block w-full rounded-full  border-gray-300 bg-gray-50 pl-10 text-black focus:border-black focus:ring-black sm:text-sm"
                      placeholder="Full Name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                    />
                  </div>
                  <div className="ml-px block  pl-4 text-sm  text-red-700">
                    {formik.touched.name ? <p>{formik.errors.name}</p> : null}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="ml-px block  pl-4 text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <div className="relative mt-1 rounded-full shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <EnvelopeIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="block w-full rounded-full  border-gray-300 bg-gray-50 pl-10 text-black focus:border-black focus:ring-black sm:text-sm"
                      placeholder="you@example.com"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                    />
                  </div>
                  <div className="ml-px block  pl-4 text-sm  text-red-700">
                    {formik.touched.email ? <p>{formik.errors.email}</p> : null}
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="number"
                    className="ml-px block pl-4 text-sm font-medium text-gray-700"
                  >
                    Number
                  </label>
                  <div className="relative mt-1 rounded-full shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <PhoneIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                    <input
                      type="text"
                      name="number"
                      id="number"
                      className="block w-full rounded-full  border-gray-300 bg-gray-50 pl-10 text-black focus:border-black focus:ring-black sm:text-sm"
                      placeholder="+201098736485"
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
                <div>
                  <label
                    htmlFor="Message"
                    className="ml-px block pl-4 text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <div className="relative mt-1 rounded-full shadow-sm">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3"></div>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-full  border-gray-300 bg-gray-50 py-3 px-8 text-black placeholder-gray-500 shadow-sm focus:border-black focus:ring-black"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.message}
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={() => formik.handleSubmit()}
                    className="inline-flex justify-center rounded-full border border-transparent bg-indigo-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
