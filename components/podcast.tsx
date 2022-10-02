import React from 'react'

type Props = {}

function Podcast({ }: Props) {
    return (
        <div>
            <h1>input for podcast</h1>
            <label htmlFor="trial">Try uploading audio</label>
            <input
                id="trial"
                type='file'
                accept='audio/*'
                capture='user'
            >
            </input>
        </div>
    )
}

export default Podcast