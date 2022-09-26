import React from 'react'
import NavigationBar from '../components/NavigatoinBar'
import WomenList from '../components/womenList'

type Props = {}

function Test({ }: Props) {
    return (
        <div className='bg-gradient-to-r from-wtCyan to-wtViolet'>
            <NavigationBar />
            <WomenList />
        </div>
    )
}

export default Test