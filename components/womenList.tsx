import React from 'react'
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im'

type Props = {}

function WomenList({ }: Props) {

    return (
        <>

            {/* <div className='grid grid-cols-2'> */}

            {/* <div className='text-center'>description here</div> */}

            <div className="card rounded-full bg-base-100 shadow-xl image-full m-10">
                <figure className='bg-red-500'>
                    {/* <img src="https://placeimg.com/400/225/arch" alt="Shoes" /> */}
                </figure>
                <div className="card-body grid grid-cols-6	place-items-center	">
                    <div className='col-span-4'>
                        <p className='border-dashed border-2 border-gray-900 p-3'>
                            This is a qoute. qoute contents will be here.
                            This is a qoute. qoute contents will be here.
                            This is a qoute. qoute contents will be here.
                        </p>
                    </div>
                    <div className='col-span-2 flex flex-col items-center'>
                        <img className="aspect-auto h-72 w-52 " src="/woman.png" />
                        <h2 className="card-title my-3">someone @ jwt</h2>
                    </div>
                </div>
            </div>

            {/* <div className='text-center'> description here</div> */}

            <div className='grid grid-cols-2 mx-10'>
                <div>
                    <div className="bg-red-500 rounded-lg shadow-xl image-full h-80 mr-5">
                        <div className="card-body grid grid-cols-6	place-items-center	h-3/4">
                            <div className='col-span-2 flex flex-col items-center'>
                                <img className="aspect-auto " src="/woman.png" />
                                <h2 className="card-title my-3">someone @ jwt</h2>
                            </div>
                            <div className='col-span-4 flex flex-col'>
                                <ImQuotesLeft className='h-5 w-5' />
                                <p className='p-1'>
                                    This is a qoute. qoute contents will be here.
                                    This is a qoute. qoute contents will be here.
                                    This is a qoute. qoute contents will be here.
                                </p>
                                <ImQuotesRight className='place-self-end h-5 w-5' />
                            </div>
                        </div>
                    </div>

                    <div className="bg-yellow-500 rounded-lg shadow-xl image-full h-80 mt-32 mr-5">
                        <div className="card-body grid grid-cols-6	place-items-center	h-3/4">
                            <div className='col-span-2 flex flex-col items-center'>
                                <img className="aspect-auto " src="/woman.png" />
                                <h2 className="card-title my-3">someone @ jwt</h2>
                            </div>
                            <div className='col-span-4 flex flex-col'>
                                <ImQuotesLeft className='h-5 w-5' />
                                <p className='p-1'>
                                    This is a qoute. qoute contents will be here.
                                    This is a qoute. qoute contents will be here.
                                    This is a qoute. qoute contents will be here.
                                </p>
                                <ImQuotesRight className='place-self-end h-5 w-5' />
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <div className="bg-green-500 rounded-lg shadow-xl image-full h-80 mt-56 mr-5">
                        <div className="card-body grid grid-cols-6	place-items-center	h-3/4">
                            <div className='col-span-4 flex flex-col'>
                                <ImQuotesLeft className='h-5 w-5' />
                                <p className='p-1'>
                                    This is a qoute. qoute contents will be here.
                                    This is a qoute. qoute contents will be here.
                                    This is a qoute. qoute contents will be here.
                                </p>
                                <ImQuotesRight className='place-self-end h-5 w-5' />
                            </div>
                            <div className='col-span-2 flex flex-col items-center'>
                                <img className="aspect-auto " src="/woman.png" />
                                <h2 className="card-title my-3">someone @ jwt</h2>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-500 rounded-lg shadow-xl image-full h-80 mt-32 mr-5">
                        <div className="card-body grid grid-cols-6	place-items-center	h-3/4">
                            <div className='col-span-4 flex flex-col'>
                                <ImQuotesLeft className='h-5 w-5' />
                                <p className='p-1'>
                                    This is a qoute. qoute contents will be here.
                                    This is a qoute. qoute contents will be here.
                                    This is a qoute. qoute contents will be here.
                                </p>
                                <ImQuotesRight className='place-self-end h-5 w-5' />
                            </div>
                            <div className='col-span-2 flex flex-col items-center'>
                                <img className="aspect-auto " src="/woman.png" />
                                <h2 className="card-title my-3">someone @ jwt</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default WomenList