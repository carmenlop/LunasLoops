import React, { useState } from 'react'
import ClientModel from '../../models/client'

import { selector } from 'recoil'
import { userState } from '../../recoil/atoms'

function NewClient({props}) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState({})
    const [pets, setPets] = useState([{}])
    const [user, setUser] = useState()

    function handleSubmit(event) {
        event.preventDefault()

        const getUser = selector({
            key: 'getUser',
            get: ({ get }) => {
                const user = get(userState);
                if(user) {
                    setUser(user)
                } else setUser()
            }
        })

        ClientModel.create({ firstName, lastName, phoneNumber, email, address, pets, user })
            .then(data => {
                props.history.push('/clients')
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
                    <input type='text' name='addressStreet' onChange={(e) => setAddress({ street: e.target.value })} value={address.street} />
                    <input type='text' name='addressCity' onChange={(e) => setAddress({ city: e.target.value })} value={address.city} />
                    <input type='text' name='addressZip' onChange={(e) => setAddress({ zip: e.target.value })} value={address.zip} />
                </div>
                <div className='form-input'>
                    <label htmlFor='pets'>Pets</label>

                    {/* <input type='text' name='petBreed' onChange={(e) => setPets({ breed: e.target.value})} value={pets[0].breed} />
                    <input type='text' name='petSize' onChange={(e) => setPets({ size: e.target.value })} value={pets[0].value} /> */}
                </div>
            </form>
        </div>
    )
}

export default NewClient

// {pets.map((pet, index) => {
//     return (
//         <>
//         <label>Name {index}:
//             <input type='text' name={`pets[${index}].name`} key={pet._id} onChange={(e) => setPets(`pets[${index}].name`, e.target.value )} value={pet.name} />
//         </label>
//         <label>Breed {index}:
//             <input type='text' name={`pets[${index}].breed`} key={pet._id} onChange={(e) => setPets(`pets[${index}].breed`, e.target.value )} value={pet.breed} />
//         </label>
//         <label>Size {index}:
//             <input type='text' name={`pets[${index}].size`} key={pet._id} onChange={(e) => setPets(`pets[${index}].size`, e.target.value )} value={pet.size} />
//         </label>
//         </>
//     )
// })}