// import Link from 'next/link'
import React from 'react'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Pagination, Navigation } from "swiper";

function WomenListSlide({ data }) {
  return (
    <div
      id="quote"
      style={{
        backgroundColor: `${data.themeColors[0].quotesSectionColor.color_code}`,
      }}
      className="pt-20 flex flex-col place-content-center"
    >
      <p
        style={{ color: `${data.themeColors[0].sectionTitleColor.color_code}` }}
        className="mb-5 text-3xl text-center font-bold"
      >
        Meet our WunderWomen
      </p>
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >

          {data.quoteList.map((quote, idx) => (
            <SwiperSlide
              key={idx}
            >
              <div className="">
                <div className="mr-5 rounded-lg">
                  <div className=" grid h-3/4 grid-cols-12 place-items-center">
                    <div className="lg:col-span-6 col-span-7 flex flex-col items-center mx-5 px-10 lg:px-16 md:px-16 py-10">
                      <div>
                        <img
                          className="aspect-auto w-full"
                          src={quote.person.imageUrl}
                        />
                      </div>
                      <div>
                        <p className="mt-5 lg:text-2xl text-sm text-center font-semibold">
                          {quote.person.name}
                        </p>
                        <p className=" lg:text-lg text-sm text-center">{quote.person.job_title}</p>
                        <p className="lg:text-lg text-sm text-center">{quote.person.department.title}</p>
                      </div>
                    </div>
                    <div className="lg:col-span-6 col-span-5 flex w-full flex-col mr-12 md:mr-32 lg:mr-32 lg:mb-20">
                      <ImQuotesLeft className="lg:h-5 lg:w-5 w-2 h-2" />
                      <p className="p-1 self-start text-center lg:text-3xl text-sm font-semibold italic">
                        {quote.body}
                      </p>
                      <ImQuotesRight className="lg:h-5 lg:w-5 w-2 h-2 place-self-end" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div >
  )
}

export default WomenListSlide
