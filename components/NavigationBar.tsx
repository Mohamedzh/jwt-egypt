import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import DropDown from './dropdown'

const navigation = [
  { name: 'WounderWomen', id: 'quote' },
  { name: 'Stories', id: 'story' },
  { name: 'Media library', id: 'media' },
  { name: 'Internship', id: 'intern' },
  { name: 'Careers', id: 'career' },
  { name: 'Contact Us', id: 'contact' },
]

const NavigationBar = ({ data }: { data?: any }) => {

  const [logo, setLogo] = useState<string>()
  console.log(data.navbarTheme[0]);

  useEffect(() => {
    if (data.navbarTheme[0].altText.length > 0) {
      setLogo(data.navbarTheme[0].altText)
    }
  }, [])
  return (
    // <div style={{ background: `linear-gradient(90deg, ${data.themeColors[0].firstColor.color_code} 0%, ${data.themeColors[0].secondColor.color_code} 100%)` }}></div>
    <nav
      id="header"
      className="fixed top-0 z-30 w-full text-white "
      style={{
        background: `linear-gradient(90deg, ${data.themeColors[0].firstColor.color_code} 0%, ${data.themeColors[0].secondColor.color_code} 100%)`,
      }}
    >
      <div className="container mx-auto mt-0 flex w-full flex-wrap items-center justify-between py-5 px-7">
        <div className="flex max-h-2 items-center  pl-4">
          <Link href="/">
            <a className="toggleColour text-2xl font-bold text-white no-underline hover:no-underline lg:text-4xl">
              {logo ? <p id="logo" style={{ fontFamily: 'wtGothic,sans-serif' }} className='text-lg'>{logo}</p> :
                <img src={`${data.navbarTheme[0].logo}`} className="inline h-20 fill-current" />
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
          <DropDown navigation={navigation} />
        </div>
        <div
          className="z-20 mt-2 hidden w-full flex-grow bg-white p-4 text-black lg:mt-0 lg:flex lg:w-auto lg:items-center lg:bg-transparent lg:p-0"
          id="nav-content"
        >
          <ul
            className="list-reset flex-1 items-center justify-end lg:flex">
            {navigation.map((item, idx) =>

              <li
                key={idx}
                className="mr-3">
                <a
                  style={{ color: `${data.navbarTheme[0].menuTextColor.color_code}` }}
                  className="hover:text-underline inline-block py-2 px-4 text-black no-underline hover:text-gray-800"
                  href={`#${item.id}`}
                >
                  {item.name}
                </a>
              </li>
            )}
          </ul>
          {/* <button
            id="navAction"
            className="focus:shadow-outline mx-auto mt-4 transform rounded-full bg-white py-4 px-8 font-bold text-gray-800 opacity-75 shadow transition duration-300 ease-in-out hover:scale-105 hover:underline focus:outline-none lg:mx-0 lg:mt-0"
          >
            Action
          </button> */}
        </div>
      </div>
      <hr className="my-0 border-b border-gray-100 py-0 opacity-25" />
    </nav>
  )
}

export default NavigationBar
