import React from 'react'

type Props = {}

function WomenList({ }: Props) {

    return (
        <>

            {/* <div className='grid grid-cols-2'> */}

            <div className='text-center'>description here</div>

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

            <div className='text-center'> description here</div>

            <div className='grid grid-cols-2 mx-10'>

                <div className="card bg-base-100 shadow-xl image-full h-96 mt-48 mr-5">
                    <figure className=''>

                    </figure>
                    <div className="card-body h-3/4">
                        <img className="h-32 mask mask-squircle" src="/44.jpg" />
                        <h2 className="card-title">Name</h2>
                        <p>
                            This is a qoute. qoute contents will be here.
                        </p>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl image-full mb-48 ml-5">
                    <figure className='bg-red-500'>
                        {/* <img src="https://placeimg.com/400/225/arch" alt="Shoes" /> */}
                    </figure>
                    <div className="card-body grid grid-cols-6	place-items-center	h-3/4">
                        <div className='col-span-4'>
                            <p className='border-dashed border-2 border-gray-900 p-3'>
                                This is a qoute. qoute contents will be here.
                                This is a qoute. qoute contents will be here.
                                This is a qoute. qoute contents will be here.
                            </p>
                        </div>
                        <div className='col-span-2 flex flex-col items-center'>
                            <img className="aspect-auto " src="/woman.png" />
                            <h2 className="card-title my-3">someone @ jwt</h2>
                        </div>
                    </div>
                </div>
            </div>

            {/* </div> */}







            <div className='my-3 mx-10'>
                <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
                    {/* <div className='grid grid-cols-2'> */}
                    {/* <img className="m-5 rounded-full h-48" src="https://placeimg.com/160/160/arch" /> */}
                    {/* <img className="object-cover w-full h-48" src="https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80" alt="Flower and sky" /> */}
                    <div className="absolute top-0 left-0 px-6 py-4">
                        <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">This is the title</h4>
                        <p className="leading-normal text-gray-100">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
                        {/* </div> */}
                    </div>
                </div>
            </div>


            <div className='grid grid-cols-2'>

                <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer ml-10 mb-3">
                    <img className="object-cover w-full h-48" src="https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80" alt="Flower and sky" />

                    <div className="absolute top-0 left-0 px-6 py-4">
                        <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">This is the title</h4>
                        <p className="leading-normal text-gray-100">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
                    </div>
                </div>

                <div></div>
                <div></div>

                <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer mr-10">
                    <img className="object-cover w-full h-48" src="https://images.unsplash.com/photo-1502581827181-9cf3c3ee0106?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=420&q=80" alt="Flower and sky" />

                    <div className="absolute top-0 left-0 px-6 py-4">
                        <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">This is the title</h4>
                        <p className="leading-normal text-gray-100">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
                    </div>
                </div>

            </div>


        </>
    )
}

export default WomenList