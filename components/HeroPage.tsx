import style from '../styles/heroPage.module.css'

const HeroPage = ({ data }) => {

  return (
    <>
      <div
        style={{
          background: `linear-gradient(90deg, ${data.themeColors[0].firstColor.color_code} 0%, ${data.themeColors[0].secondColor.color_code} 100%)`,
        }}
        className="pt-24"
      >
        <div className="container mx-auto flex flex-col flex-wrap items-center px-14 md:flex-row">
          {/* Left Col */}
          <div className="flex w-full flex-col items-start justify-center text-center md:w-2/5 md:text-left">
            <p
              style={{ color: `${data.header[0].textColor.color_code}` }}
              className="tracking-loose w-full uppercase">
              {data.header[0].heading}
            </p>
            <p
              style={{ color: `${data.header[0].textColor.color_code}` }}
              className="my-4 text-5xl font-bold leading-tight">
              {data.header[0].title}
            </p>
            <p
              style={{ color: `${data.header[0].textColor.color_code}` }}
              className="mb-8 text-2xl leading-normal">
              {data.header[0].subtitle}
            </p>
            {/* <button className="focus:shadow-outline mx-auto my-6 transform rounded-full bg-white py-4 px-8 font-bold text-gray-800 shadow-lg transition duration-300 ease-in-out hover:scale-105 hover:underline focus:outline-none lg:mx-0">
              {data.header[0].buttonText}
            </button> */}
          </div>
          {/* Right Col */}
          <div className="w-full py-6 text-center md:w-3/5">
            <img
              className="z-50 w-full md:w-4/5"
              src={data.header[0].imageUrl}
            />
          </div>
        </div>

        <div className="wavyBorderBottom">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="wave" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{
                    stopColor: `${data.themeColors[0].firstColor.color_code}`,
                  }}
                />
                <stop
                  offset="100%"
                  style={{
                    stopColor: `${data.themeColors[0].secondColor.color_code}`,
                  }}
                />
              </linearGradient>
            </defs>
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="rgb(243 244 246)"
            ></path>
          </svg>
        </div>
      </div>
    </>
  )
}

export default HeroPage
