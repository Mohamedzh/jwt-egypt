import React from 'react'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import { WomenListType } from '../types '

type Props = {}

function WomenListTest({ }: Props) {

    let womenList: WomenListType[] = [
        { name: 'Mai Azzmy', dep: "Marketing", quote: 'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.', imageSrc: '', imageAlt: 'alt' },
        { name: 'Name Name', dep: "Marketing", quote: 'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.', imageSrc: '', imageAlt: 'alt' },
        { name: 'Name Name', dep: "Marketing", quote: 'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.', imageSrc: '', imageAlt: 'alt' },
        { name: 'Name Name', dep: "Marketing", quote: 'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.', imageSrc: '', imageAlt: 'alt' },
        { name: 'Name Name', dep: "Marketing", quote: 'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.', imageSrc: '', imageAlt: 'alt' },
        { name: 'Name Name', dep: "Marketing", quote: 'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.', imageSrc: '', imageAlt: 'alt' }
    ]
    let colors = ['bg-wtFlameRed', 'bg-wtGreenSheen', 'bg-wtYellow', 'bg-wtBlue', 'bg-wtTango', 'bg-wtOrange']

    let j = 0
    for (let i = 0; i < womenList.length; i++) {
        womenList[i].color = colors[j]
        console.log(j, colors.length);
        j++
        if (j === colors.length) {
            j = 0
        }
    }
    return (
        <>
            <p className='text-6xl font-black mt-32 mb-10 text-center'>Meet the team</p>

            <div className='grid grid-cols-2 mx-10 pb-72'>
                {womenList.map((woman, idx) =>
                    <div className={`${woman.color} rounded-lg shadow-xl image-full h-80 -mb-48 ${(idx % 2 == 0 ? 'mr-7' : 'ml-7 mt-64')}`}>
                        <div className="card-body grid grid-cols-6	place-items-center	h-3/4">
                            <div className='col-span-4 flex flex-col'>
                                <ImQuotesLeft className='h-5 w-5' />
                                <p className='p-1'>
                                    {woman.quote}
                                </p>
                                <ImQuotesRight className='place-self-end h-5 w-5' />
                            </div>
                            <div className='col-span-2 flex flex-col items-center'>
                                <img className="aspect-auto " src="/woman.png" />
                                <h2 className="card-title mt-5 text-2xl italic">{woman.name}</h2>
                                <p className=" text-lg italic">{woman.dep}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default WomenListTest