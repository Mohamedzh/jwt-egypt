import Link from 'next/link'
import React from 'react'
import { ImArrowRight, ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import { WomenListType } from '../types '

function WomenListSlide({ data }) {
  return (
    <div
      id="quote"
      style={{
        backgroundColor: `${data.themeColors[0].quotesSectionColor.color_code}`,
      }}
      className="pt-20"
    >
      <div className="carousel w-full">
        {data.quoteList.map((quote, idx) => (
          <div
            key={idx}
            className="carousel-item relative flex w-full flex-col"
          >
            <h1
              id={`slide ${idx}`}
              className="mb-5 text-3xl font-bold  text-wtTango sm:text-center"
            >
              Meet our WunderWomen
            </h1>
            <div className="">
              <div className="mr-5 rounded-lg">
                <div className=" grid h-3/4 grid-cols-6 place-items-center">
                  <div className="col-span-2 flex flex-col items-center px-24 py-10">
                    <img
                      className="aspect-auto w-72"
                      src={quote.person.imageUrl}
                    />
                    <p className="mt-5 text-2xl font-semibold">
                      {quote.person.name}
                    </p>
                    <p className=" text-lg ">{quote.person.job_title}</p>
                    <p className="text-lg ">{quote.person.department.title}</p>
                  </div>
                  <div className="col-span-4 flex w-4/6 flex-col">
                    <ImQuotesLeft className="h-5 w-5" />
                    <p className="p-1 text-center text-3xl font-semibold italic">
                      {quote.body}
                    </p>
                    <ImQuotesRight className="h-5 w-5 place-self-end" />
                  </div>
                </div>
              </div>
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a
                  href={`#slide ${idx === 0 ? data.quoteList.length - 1 : idx - 1
                    }`}
                  className="btn btn-circle"
                >
                  ❮
                </a>

                <a
                  href={`#slide ${idx === data.quoteList.length - 1 ? 0 : idx + 1
                    }`}
                  className="btn btn-circle mr-5"
                >
                  ❯
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <Link href="/quoteslist">
                <a >
                    <p className="text-2xl mx-20 text-wtBlue font-bold flex">
                        See the whole team <ImArrowRight className="mt-1.5 ml-2" />
                    </p>
                </a>
            </Link> */}
    </div>
  )
}

export default WomenListSlide
