import React from 'react'
import { ImArrowRight } from 'react-icons/im'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper"
import Link from 'next/link';

function PodcastSlide({ data }) {

    return (
        <div className='my-20'
        >
            <div
                id="media"
                style={{ backgroundColor: `${data.themeColors[0].videoSectionColor.color_code}`, height: '600px' }}
                className='flex place-content-center'>
                <Swiper
                    aria-orientation='horizontal'
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        pauseOnMouseEnter: true
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper "
                >
                    {data.episodes.map((episode, idx) =>
                        <SwiperSlide
                            key={idx}
                        >
                            <div className="mb-10">
                                <p

                                    style={{ color: `${data.themeColors[0].sectionTitleColor.color_code}` }}
                                    className="text-3xl font-bold tracking-tight text-center">
                                    Podcasts
                                </p>
                            </div>
                            <div>
                                <p className="text-xl mb-3 font-bold tracking-tight text-gray-900 text-center">
                                    {episode.title}
                                </p>
                            </div>
                            <video
                                id="my-player"
                                className="video-js w-min h-96 lg:w-full lg:h-auto"
                                onClick={() => console.log(false)}
                                onAnimationStart={() => console.log('click to play')}

                                controls
                                preload="auto"
                                poster=""
                                data-setup='{}'>
                                <source
                                    src={`${episode.url}`}>
                                </source>
                            </video>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
            <Link href='/podcasts'>
                <a
                    className='m-3 text-2xl font-semibold text-wtMediumRuby flex'>
                    Explore our podcasts
                    <ImArrowRight className="mt-1.5 ml-2" />
                </a>
            </Link>
        </div >
    )
}

export default PodcastSlide