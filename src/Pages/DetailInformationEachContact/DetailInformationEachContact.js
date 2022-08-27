import React from 'react'
import { useContext, MainContext } from '../../context'

function DetailInformationEachContact() {
    const { eachNewIdContact } = useContext(MainContext)
    console.log('ssss', eachNewIdContact)
    console.log()
    return (
        <div className='detailInfo'>
            <h1>{eachNewIdContact.name} haqqında məlumat</h1>
        </div>
    )
}

export default DetailInformationEachContact