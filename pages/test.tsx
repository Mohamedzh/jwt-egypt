import React from 'react'
import WomenList from '../components/womenList'
import WomenListSlide from '../components/womenListSlide'

type Props = {}

function Test({ }: Props) {
    return (
        <div>
            <WomenList />

            <WomenListSlide />
        </div>
    )
}

export default Test