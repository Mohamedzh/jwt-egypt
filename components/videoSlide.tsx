import React from 'react'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import VideoPlayer from './videoSection'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper"

function VideoSlide({ data }) {

    return (
        <div
            style={{ backgroundColor: `${data.themeColors[0].videoSectionColor.color_code}`, height: '600px' }}
            className='my-20 mb-36 flex place-content-center'>
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
            >                {data.videos.map((video, idx) =>
                <SwiperSlide
                    key={idx}
                >
                    <div className="mb-10">
                        <p className="text-3xl font-bold tracking-tight  text-wtTango sm:text-center">
                            Video Section
                        </p>
                    </div>
                    <div>
                        <p className="text-xl mb-3 font-bold tracking-tight text-gray-900 sm:text-center">
                            {video.videoName}
                        </p>
                    </div>
                    <div>
                        <VideoPlayer url={video.videoId} />
                    </div>
                </SwiperSlide>
            )}
            </Swiper>
        </div >
    )
}

export default VideoSlide