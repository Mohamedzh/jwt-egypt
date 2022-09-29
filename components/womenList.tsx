import React from 'react'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import { WomenListType } from '../types '

type Props = {
    data: any
}

function WomenList({ data }: Props) {
console.log(data.quoteList[0].person.imageUrl)
    return (
        <>
            <p className='text-6xl font-black mt-32 mb-10 text-center'>
                Meet our WunderWomen
            </p>

            <div className='grid grid-cols-2 mx-10 pb-72'>
                {data.quoteList.map((quote, idx) =>
                    <div style={{ backgroundColor: `${quote.color.color_code}` }} className={`rounded-lg shadow-xl image-full h-80 -mb-48 ${(idx % 2 == 0 ? 'mr-7' : 'ml-7 mt-64')}`} key={idx}>
                        <div className="card-body grid grid-cols-6	place-items-center	h-3/4">
                            <div className='col-span-4 flex flex-col'>
                                <ImQuotesLeft className='h-5 w-5' />
                                <p className='p-1'>
                                    {quote.body}
                                </p>
                                <ImQuotesRight className='place-self-end h-5 w-5' />
                            </div>
                            <div className='col-span-2 flex flex-col items-center'>
                                <img className="aspect-auto " src={quote.person.imageUrl} />
                                <h2 className="card-title mt-5 text-2xl italic">{quote.person.name}</h2>
                                <p className=" text-lg italic">{quote.person.job_title}</p>
                                <p className=" text-lg italic">{quote.person.department.title}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default WomenList
