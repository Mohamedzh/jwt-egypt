import React from 'react'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'
import { WomenListType } from '../types '

type Props = {}

function WomenListTest({}: Props) {
  let womenList: WomenListType[] = [
    {
      name: 'Mai Azzmy',
      dep: 'Marketing',
      quote:
        'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.',
      imageSrc: '',
      imageAlt: 'alt',
    },
    {
      name: 'Name Name',
      dep: 'Marketing',
      quote:
        'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.',
      imageSrc: '',
      imageAlt: 'alt',
    },
    {
      name: 'Name Name',
      dep: 'Marketing',
      quote:
        'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.',
      imageSrc: '',
      imageAlt: 'alt',
    },
    {
      name: 'Name Name',
      dep: 'Marketing',
      quote:
        'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.',
      imageSrc: '',
      imageAlt: 'alt',
    },
    {
      name: 'Name Name',
      dep: 'Marketing',
      quote:
        'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.',
      imageSrc: '',
      imageAlt: 'alt',
    },
    {
      name: 'Name Name',
      dep: 'Marketing',
      quote:
        'There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.',
      imageSrc: '',
      imageAlt: 'alt',
    },
  ]
  let colors = [
    'bg-wtFlameRed',
    'bg-wtGreenSheen',
    'bg-wtYellow',
    'bg-wtBlue',
    'bg-wtTango',
    'bg-wtOrange',
  ]

  return (
    <>
      <p className="mt-32 mb-10 text-center text-6xl font-black">
        Meet the team
      </p>

      <div className="mx-10 grid grid-cols-2 pb-72">
        {womenList.map((woman, idx) => (
          <div
            className={`${
              woman.color
            } image-full -mb-48 h-80 rounded-lg shadow-xl ${
              idx % 2 == 0 ? 'mr-7' : 'ml-7 mt-64'
            }`}
          >
            <div className="card-body grid h-3/4	grid-cols-6	place-items-center">
              <div className="col-span-4 flex flex-col">
                <ImQuotesLeft className="h-5 w-5" />
                <p className="p-1">{woman.quote}</p>
                <ImQuotesRight className="h-5 w-5 place-self-end" />
              </div>
              <div className="col-span-2 flex flex-col items-center">
                <img className="aspect-auto " src="/woman.png" />
                <h2 className="card-title mt-5 text-2xl italic">
                  {woman.name}
                </h2>
                <p className=" text-lg italic">{woman.dep}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default WomenListTest
