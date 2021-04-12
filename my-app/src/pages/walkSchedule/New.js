import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { userState } from '../../recoil/atoms'
import WalkScheduleModel from '../../models/walkSchedule'
import AuthModel from '../../models/auth'
import ClientModel from '../../models/client'
import { useHistory } from 'react-router-dom'
import useClients from '../../hooks/useClients'


function WalkScheduleNew({props}) {
    const [walkDate, setWalkDate] = useState("")
    const [startTime, setStartTime] = useState("")
    const [duration, setDuration] = useState(0)
    const [clients, fetchClients] = useClients()
    const [client, setClient] = useState('')
    const [user, setUser] = useRecoilState(userState)
    let history = useHistory()



    useEffect(function () {
        if (localStorage.getItem('uid')) {
            AuthModel.verify().then((response) => {
                setUser(response.user)
            })
        }
    }, [])

    function clientOptions(clients) {
        return clients.map((client, index) => (
            <option value={client._id} id={index}>{client.firstName}</option>
        ))
    }
    

    function handleSubmit(event) {
        event.preventDefault()

        WalkScheduleModel.create({ walkDate, startTime, duration, client, user })
            .then(data => {
                history.push('/walk-schedule')
            })
    }

    return (
        <div>
            <h1>New Walk</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-input'>
                    <label htmlFor='walkDate'>Walk Date
                        <input type='text' name='walkDate' onChange={(e) => setWalkDate(e.target.value)} value={walkDate} />
                    </label>
                </div>
                <div className='form-input'>
                    <label htmlFor='startTime'>Walk Time</label>
                    <input type='text' name='startTime' onChange={(e) => setStartTime(e.target.value)} value={startTime} />
                </div>
                <div className='form-input'>
                    <label htmlFor='duration'>Duration</label>
                    <input type='text' name='duration' onChange={(e) => setDuration(e.target.value)} value={duration} />
                </div>
                <div className='form-input'>
                    <label>Clients:</label>
                        <select value={client} name='client' onChange={(e) => setClient(e.target.value)}>
                            {clientOptions(clients)}
                        </select>
                </div>
                <input type='submit' value='Save!' />
            </form>
        </div>
    )
}

export default WalkScheduleNew; 