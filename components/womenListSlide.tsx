// import Link from 'next/link'
import React from 'react'
import { ImArrowRight, ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
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
      className="pt-20 flex place-content-center"
    >
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
            <p
              className="mb-5 text-3xl font-bold  text-wtTango sm:text-center"
            >
              Meet our WunderWomen
            </p>
            <div className="">
              <div className="mr-5 rounded-lg">
                <div className=" grid h-3/4 grid-cols-6 place-items-center">
                  <div className="col-span-3 flex flex-col items-center px-24 py-10">
                    <img
                      className="aspect-auto w-96"
                      src={quote.person.imageUrl}
                    />
                    <p className="mt-5 text-2xl font-semibold">
                      {quote.person.name}
                    </p>
                    <p className=" text-lg ">{quote.person.job_title}</p>
                    <p className="text-lg ">{quote.person.department.title}</p>
                  </div>
                  <div className="col-span-3 flex w-5/6 flex-col mr-32 mb-20">
                    <ImQuotesLeft className="h-5 w-5" />
                    <p className="p-1 self-start text-center text-3xl font-semibold italic">
                      {quote.body}
                    </p>
                    <ImQuotesRight className="h-5 w-5 place-self-end" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div >
  )
}

export default WomenListSlide
