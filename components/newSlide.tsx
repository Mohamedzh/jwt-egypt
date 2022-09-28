/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { ImArrowRight, ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

const tiers = [
    {
        name: 'Hobby',
        href: '#',
        priceMonthly: 12,
        description: 'All the basics for starting a new business',
        includedFeatures: ['Potenti felis, in cras at at ligula nunc.', 'Orci neque eget pellentesque.'],
    },
    {
        name: 'Freelancer',
        href: '#',
        priceMonthly: 24,
        description: 'All the basics for starting a new business',
        includedFeatures: [
            'Potenti felis, in cras at at ligula nunc. ',
            'Orci neque eget pellentesque.',
            'Donec mauris sit in eu tincidunt etiam.',
        ],
    },
    {
        name: 'Startup',
        href: '#',
        priceMonthly: 32,
        description: 'All the basics for starting a new business',
        includedFeatures: [
            'Potenti felis, in cras at at ligula nunc. ',
            'Orci neque eget pellentesque.',
            'Donec mauris sit in eu tincidunt etiam.',
            'Faucibus volutpat magna.',
        ],
    },
    {
        name: 'Enterprise',
        href: '#',
        priceMonthly: 48,
        description: 'All the basics for starting a new business',
        includedFeatures: [
            'Potenti felis, in cras at at ligula nunc. ',
            'Orci neque eget pellentesque.',
            'Donec mauris sit in eu tincidunt etiam.',
            'Faucibus volutpat magna.',
            'Id sed tellus in varius quisque.',
            'Risus egestas faucibus.',
            'Risus cursus ullamcorper.',
        ],
    },
]

export default function NewWomenSlide({ data }) {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl pb-12 px-4 sm:px-6 lg:px-8">
                <div className="sm:align-center sm:flex sm:flex-col">
                    <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-center">Meet our WunderWomen</h1>
                    {/* <p className="mt-5 text-xl text-gray-500 sm:text-center">
            Start building for free, then add a site plan to go live. Account plans unlock additional features.
          </p> */}
                    {/* <div className="relative mt-6 flex self-center rounded-lg bg-gray-100 p-0.5 sm:mt-8">
            <button
              type="button"
              className="relative w-1/2 whitespace-nowrap rounded-md border-gray-200 bg-white py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8"
            >
              Monthly billing
            </button>
            <button
              type="button"
              className="relative ml-0.5 w-1/2 whitespace-nowrap rounded-md border border-transparent py-2 text-sm font-medium text-gray-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8"
            >
              Yearly billing
            </button>
          </div> */}
                </div>
                <div
                    // style={{ backgroundColor: "#e2e2d0"}} 
                    className="mt-12 space-y-4 rounded-lg sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
                    {data.quoteList.map((quote, idx) =>
                        <div key={idx} className="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
                            <div className="p-6 flex flex-col">
                                <img className="h-60" src={quote.person.imageUrl}></img>
                                <h2 className="text-2xl font-medium leading-6 text-gray-900 text-center my-5">{quote.person.name}</h2>
                                <p className="text-lg text-gray-500 text-center">{quote.person.job_title}</p>
                                <p className="text-lg text-gray-500 text-center">{quote.person.department.title}</p>
                            </div>
                            <div className="px-6 pt-6 pb-8">
                                <p className="text-lg text-gray-500 text-left mb-5">Best quote:</p>
                                <h3 className="font-medium text-gray-900 text-2xl text-center flex flex-col">
                                    <ImQuotesLeft />
                                    {quote.body}
                                    <ImQuotesRight className='place-self-end' />
                                </h3>
                            </div>
                        </div>
                    )}
                    <Link href="/quoteslist">
                        <a>
                            <p className="text-2xl text-wtBlue font-bold flex">
                                See the whole team <ImArrowRight className="mt-1.5 ml-2" />
                            </p>
                        </a></Link>

                </div>
            </div>
        </div>
    )
}
