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
        <div
            style={{ backgroundColor: "rgb(243 244 246)" }}
            className="bg-white">
            <div className="mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:px-8">
                <div className="sm:align-center sm:flex sm:flex-col">
                    <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-center">
                        Meet our WunderWomen
                    </h1>
                </div>
                <div

                    className="mt-12 space-y-4 rounded-lg sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
                    {data.quoteList.map((quote, idx) =>
                        <div key={idx} className="  rounded-lg">
                            <div className="p-6 flex flex-col">
                                <img className="h-60" src={quote.person.imageUrl}></img>
                                <h2 className="text-2xl font-medium leading-6 text-gray-900 text-center my-5">{quote.person.name}</h2>
                                <p className="text-lg text-gray-500 text-center">{quote.person.job_title}</p>
                                <p className="text-lg text-gray-500 text-center">{quote.person.department.title}</p>
                            </div>
                            <div className="px-6 pt-6 pb-8">
                                <p className="text-lg text-gray-500 text-left mb-5">Best quote:</p>
                                <h3 className="font-medium text-gray-900 text-2xl text-center flex flex-col">
                                    <ImQuotesLeft className='spin h-3' />
                                    {quote.body}
                                    <ImQuotesRight className='place-self-end h-3' />
                                </h3>
                            </div>
                        </div>
                    )}
                    <Link href="/quoteslist">
                        <a>
                            <p className="text-2xl text-wtBlue font-bold flex">
                                See the whole team <ImArrowRight className="mt-1.5 ml-2" />
                            </p>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
