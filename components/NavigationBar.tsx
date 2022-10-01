import Link from 'next/link'
import React, { useState } from 'react'

const NavigationBar = ({ data }: { data?: any }) => {
  const [logo, setLogo] = useState<string>()
  return (
    // <div style={{ background: `linear-gradient(90deg, ${data.themeColors[0].firstColor.color_code} 0%, ${data.themeColors[0].secondColor.color_code} 100%)` }}></div>
    <nav
      id="header"
      className="fixed top-0 z-30 w-full text-white "
      style={{
        background: `linear-gradient(90deg, ${data.themeColors[0].firstColor.color_code} 0%, ${data.themeColors[0].secondColor.color_code} 100%)`,
      }}
    >
      <div className="container mx-auto mt-0 flex w-full flex-wrap items-center justify-between py-2 px-7">
        <div className="flex max-h-2 items-center pl-4">
          <Link href="/">
            <a className="toggleColour text-2xl font-bold text-white no-underline hover:no-underline lg:text-4xl">
              {logo ? <p id="logo" style={{ fontFamily: 'wtGothic,sans-serif' }} className='text-lg'>{logo}<br></br> Thompson</p> :
                <img src="/logo2.png" className="inline h-20 fill-current" />
              }             
               {/* Icon from: http://www.potlabicons.com/  */}
              {/* <svg className="h-8 fill-current inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.005 512.005">
            <rect fill="#2a2a31" x="16.539" y="425.626" width="479.767" height="50.502" transform="matrix(1,0,0,1,0,0)" />
            <path
              className="plane-take-off"
              d=" M 510.7 189.151 C 505.271 168.95 484.565 156.956 464.365 162.385 L 330.156 198.367 L 155.924 35.878 L 107.19 49.008 L 211.729 230.183 L 86.232 263.767 L 36.614 224.754 L 0 234.603 L 45.957 314.27 L 65.274 347.727 L 105.802 336.869 L 240.011 300.886 L 349.726 271.469 L 483.935 235.486 C 504.134 230.057 516.129 209.352 510.7 189.151 Z "
            />
          </svg> */}
            </a>
          </Link>
        </div>
        <div className="block pr-4 lg:hidden">
          <button
            id="nav-toggle"
            className="focus:shadow-outline flex transform items-center p-1 text-pink-800 transition duration-300 ease-in-out hover:scale-105 hover:text-gray-900 focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className="z-20 mt-2 hidden w-full flex-grow bg-white p-4 text-black lg:mt-0 lg:flex lg:w-auto lg:items-center lg:bg-transparent lg:p-0"
          id="nav-content"
        >
          <ul className="list-reset flex-1 items-center justify-end lg:flex">
            <li className="mr-3">
              <a
                className="inline-block py-2 px-4 font-bold text-black no-underline"
                href="#"
              >
                Stories
              </a>
            </li>
            <li className="mr-3">
              <a
                className="hover:text-underline inline-block py-2 px-4 text-black no-underline hover:text-gray-800"
                href="#"
              >
                Careers
              </a>
            </li>
            <li className="mr-3">
              <a
                className="hover:text-underline inline-block py-2 px-4 text-black no-underline hover:text-gray-800"
                href="#"
              >
                Media library
              </a>
            </li>
          </ul>
          <button
            id="navAction"
            className="focus:shadow-outline mx-auto mt-4 transform rounded-full bg-white py-4 px-8 font-bold text-gray-800 opacity-75 shadow transition duration-300 ease-in-out hover:scale-105 hover:underline focus:outline-none lg:mx-0 lg:mt-0"
          >
            Action
          </button>
        </div>
      </div>
      <hr className="my-0 border-b border-gray-100 py-0 opacity-25" />
    </nav>
  )
}

export default NavigationBar
