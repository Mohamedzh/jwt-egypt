import React from 'react'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import VideoPlayer from './videoSection'

function VideoSlide({ data }) {
    return (
        <div style={{ backgroundColor: "#e2e2d0" }} className='m-5'>
            <div className="carousel w-full">
                {data.quoteList.map((quote, idx) =>
                    <div key={idx} id={`slide ${idx}`} className="carousel-item h-96 relative w-full">
                        <VideoPlayer />

                        {/* <div className='rounded-lg shadow-xl mr-5'>
                            <div className=" grid grid-cols-6 place-items-center h-3/4">
                                <div className='col-span-2 flex flex-col items-center px-24 py-10'>
                                    <img className="aspect-auto w-72" src={quote.person.imageUrl} />
                                    <h2 className="card-title my-5 text-4xl italic">{quote.person.name}</h2>
                                    <p className=" text-xl italic">{quote.person.job_title}</p>
                                    <p className=" text-xl italic">{quote.person.department.title}</p>
                                </div>
                                <div className='col-span-4 flex flex-col w-4/6'>
                                    <ImQuotesLeft className='h-5 w-5' />
                                    <p className='p-1 text-3xl text-justify	'>
                                        {quote.body}
                                    </p>
                                    <ImQuotesRight className='place-self-end h-5 w-5' />
                                </div>
                            </div>
                </div>*/}
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a
                                href={`#slide ${(idx === 0 ? data.quoteList.length - 1 : idx - 1)}`}
                                className="btn btn-circle">
                                ❮
                            </a>

                            <a
                                href={`#slide ${(idx === data.quoteList.length - 1 ? 0 : idx + 1)}`}
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