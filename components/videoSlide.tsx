import React from 'react'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import VideoPlayer from './videoSection'

function VideoSlide({ data }) {

    return (
        <div
            style={{ backgroundColor: `${data.themeColors[0].videoSectionColor.color_code}`, height: '600px' }}
            className='my-20 mb-36'>
            <div className="carousel w-full">
                {data.videos.map((video, idx) =>
                    <div key={idx} className="carousel-item relative w-full flex flex-col">
                        <div className="mb-10" id={`videoSlide ${idx}`}>
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
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a
                                href={`#videoSlide ${(idx === 0 ? data.quoteList.length - 1 : idx - 1)}`}
                                className="btn btn-circle">
                                ❮
                            </a>
                            <a
                                href={`#videoSlide ${(idx === data.quoteList.length - 1 ? 0 : idx + 1)}`}
                                className="btn btn-circle mr-5">
                                ❯
                            </a>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default VideoSlide