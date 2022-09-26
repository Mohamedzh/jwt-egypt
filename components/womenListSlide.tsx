import React from 'react'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'


let womenList = [
    { name: 'Mai Azzmy', dep: "Marketing", quote: 'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.', imageSrc: '', imageAlt: 'alt' },
    { name: 'Name Name', dep: "Marketing", quote: 'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.', imageSrc: '', imageAlt: 'alt' },
    { name: 'Name Name', dep: "Marketing", quote: 'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.', imageSrc: '', imageAlt: 'alt' },
    { name: 'Name Name', dep: "Marketing", quote: 'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.', imageSrc: '', imageAlt: 'alt' },
    { name: 'Name Name', dep: "Marketing", quote: 'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.', imageSrc: '', imageAlt: 'alt' },
    { name: 'Name Name', dep: "Marketing", quote: 'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.', imageSrc: '', imageAlt: 'alt' }
]

let colors = ['bg-wtFlameRed', 'bg-wtGreenSheen', 'bg-wtYellow', 'bg-wtBlue']

let j = 0
for (let i = 0; i < womenList.length; i++) {
    womenList[i].color = colors[j]
    console.log(j, colors.length);
    j++
    if (j === colors.length) {
        j = 0
    }
}
console.log(womenList)


function WomenListSlide() {
    return (
        <div className='m-5'>
            <div className="carousel w-full">
                {womenList.map((woman, idx) =>
                    <div key={idx} id={`slide ${idx}`} className="carousel-item relative w-full">
                        <div className={`${woman.color} rounded-lg shadow-xl image-full mr-5`}>
                            <div className="card-body grid grid-cols-6	place-items-center	h-3/4">
                                <div className='col-span-2 flex flex-col items-center'>
                                    <img className="aspect-auto " src="/woman.png" />
                                    <h2 className="card-title my-5 text-4xl italic">{woman.name}</h2>
                                    <p className=" text-xl italic">{woman.dep}</p>
                                </div>
                                <div className='col-span-4 flex flex-col w-4/6'>
                                    <ImQuotesLeft className='h-5 w-5' />
                                    <p className='p-1 text-3xl text-justify	'>
                                        {woman.quote}
                                    </p>
                                    <ImQuotesRight className='place-self-end h-5 w-5' />
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a
                                href={`#slide ${(idx === 0 ? womenList.length - 1 : idx - 1)}`}
                                className="btn btn-circle">
                                ❮
                            </a>

                            <a
                                href={`#slide ${(idx === womenList.length - 1 ? 0 : idx + 1)}`}
                                className="btn btn-circle mr-5">
                                ❯
                            </a>
                        </div>
                    </div>
                )}
                {/* <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://placeimg.com/800/200/arch" className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default WomenListSlide