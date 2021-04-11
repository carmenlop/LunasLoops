import React, { useState, useEffect } from 'react'
import ClientModel from '../../models/client'
import { useRecoilState } from 'recoil'
import { userState } from '../../recoil/atoms'
import { useHistory } from 'react-router-dom'
import AuthModel from '../../models/auth'


function NewClient({props}) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [pet, setPet] = useState('')
    const [user, setUser] = useRecoilState(userState)
    let history = useHistory()

    useEffect(function () {
        if (localStorage.getItem('uid')) {
            AuthModel.verify().then((response) => {
                setUser(response.user)
            })
        }
    }, [])

    function handleSubmit(event) {
        event.preventDefault()

        ClientModel.create({ firstName, lastName, phoneNumber, email, address, pet, user })
            .then(data => {
                history.push('/clients')
            })
    }

    return (
        <div>
            <h2>New Client</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-input'>
                    <label htmlFor='firstName'>First Name</label>
                    <input type='text' name='firstName' onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                </div>
                <div className='form-input'>
                    <label htmlFor='lastName'>Last Name</label>
                    <input type='text' name='lastName' onChange={(e) => setLastName(e.target.value)} value={lastName} />
                </div>
                <div className='form-input'>
                    <label htmlFor='phoneNumber'>Phone Number</label>
                    <input type='text' name='phoneNumber' onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
                </div>
                <div className='form-input'>
                    <label htmlFor='email'>Email</label>
                    <input type='text' name='email' onChange={(e) => setEmail(e.target.value)} value={email} />
                </div>
                <div className='form-input'>
                    <label htmlFor='address'>Address</label>
                    <input type='text' name='address' onChange={(e) => setAddress(e.target.value)} value={address} />
                </div>
                <div>
                <div className='form-input'>
                    <label htmlFor='pet'>Pet Name:</label>
                    <input type='text' name='pet' onChange={(e) => setPet(e.target.value)} value={pet} />
                </div>
                </div>


                <input type='submit' value='Save!' />
            </form>
        </div>
    )
}

export default NewClient