import React, { useEffect, useState } from 'react'
import './_detailinfo.scss'
import { useContext, MainContext } from '../../context'
import { useParams, Link } from 'react-router-dom';
import { IoMdNotificationsOff, IoIosNotifications } from 'react-icons/io'

function DetailInfo() {
    const params = useParams();
    const { contacts } = useContext(MainContext)
    const [eachDetailFind, setEachDetailFind] = useState('')
    useEffect(() => {
        const findDetail = contacts.find(contact => contact.id === params.id)
        setEachDetailFind(findDetail)
    }, [])
    return (
        <div className='detailInfo'>
            <Link to="/contacts" className="getToContacts">
                ←←←
            </Link>
            <h1>{eachDetailFind.name} <span>- haqqında məlumat</span></h1>
            <p className='iconNotification'>{eachDetailFind.newAlertsInfo ? <span> <IoIosNotifications className='iconSound' /> Bildirişlər aktivdir</span> : <span><IoMdNotificationsOff className='iconMute' /> Bildirişlər aktiv deyil</span>} </p>
            <table>
                <tbody>
                    <tr>
                        <td><p>Ad:</p></td>
                        <td><p>{eachDetailFind.name}</p></td>
                    </tr>
                    <tr>
                        <td><p>Soyad:</p></td>
                        <td><p>{eachDetailFind.surname}</p></td>
                    </tr>
                    <tr>
                        <td><p>Ata adı:</p></td>
                        <td><p>{eachDetailFind.dadName}</p></td>
                    </tr>
                    <tr>
                        <td><p>Email:</p></td>
                        <td><p>{eachDetailFind.mail}</p></td>
                    </tr>
                    <tr>
                        <td><p>Vəzifə:</p></td>
                        <td><p>{eachDetailFind.occupation}</p></td>
                    </tr>
                    <tr>
                        <td><p>Cinsi:</p></td>
                        <td><p>{eachDetailFind.gender}</p></td>
                    </tr>
                    <tr>
                        <td><p>Əlavə məlumat:</p></td>
                        <td><p>{eachDetailFind.additionalInformation}</p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DetailInfo;