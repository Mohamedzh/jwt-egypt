import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { scrollToSection } from '../lib/functions'
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
  const router = useRouter()


  useEffect(() => {
    if (data.navbarTheme[0].altText) {
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
        <div className="flex max-h-2 items-center py-5 pl-4">
          <Link href="/">
            <a className="toggleColour text-2xl font-bold text-white no-underline hover:no-underline lg:text-4xl">
              {logo ? <p id="logo" style={{ fontFamily: 'wtGothic,sans-serif' }} className='text-lg'>{logo}</p> :
                <img src={`${data.navbarTheme[0].logo}`} className="inline h-20 fill-current" />
              }
            </a>
          </Link>
        </div>
        <div className="block pr-4 lg:hidden">
          <DropDown navigation={navigation} />
        </div>
        {router.asPath === '/' &&
          <div
            className="z-20 mt-2 hidden w-full flex-grow bg-white p-4 text-black lg:mt-0 lg:flex lg:w-auto lg:items-center lg:bg-transparent lg:p-0"
            id="nav-content"
          >
            <ul
              className="list-reset flex-1 items-center justify-end lg:flex">
              {navigation.map((item, idx) =>
                <li
                  key={idx}
                  // className="mr-3"
                  style={{ color: `${data.navbarTheme[0].menuTextColor.color_code}` }}
                  className="cursor-pointer hover:underline underline-offset-1 inline-block py-2 px-4 hover:text-gray-800"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.name}

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
        }
      </div>
      <hr className="my-0 border-b border-gray-100 py-0 opacity-25" />
    </nav>
  )
}

export default NavigationBar
