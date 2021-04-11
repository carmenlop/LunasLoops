import React, { Component } from 'react'
import ClientModel from '../../models/client'

class NewClientContainer extends Component {
    state = {
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: '',
        address: {
            street: '',
            city: '',
            zip: ''
        },
        pets: [
            {
                name: '',
                breed: '',
                size: ''
            }
        ],
        user: '' 
    }

    handleChange = (event) => {
        event.preventDefault()
        ClientModel.create(this.state)
            .then((result) => {
                console.log(result)
                this.props.history.push('/clients')
            })

    }

    render () {
        return (
            <div>
            <h2>New Client</h2>
            <form onSubmit={this.handleSubmit}>
                <div className='form-input'>
                    <label htmlFor=''>First Name</label>
                    <input onInput={this.handleChange} type='text' name='firstName' />
                </div>
                <div className='form-input'>
                    <label htmlFor=''>Last Name</label>
                    <input onInput={this.handleChange} type='text' name='lastName' />
                </div>
                <div className='form-input'>
                    <label htmlFor=''>Phone Number</label>
                    <input onInput={this.handleChange} type='text' name='phoneNumber' />
                </div>
                <div className='form-input'>
                    <label htmlFor=''>Email</label>
                    <input onInput={this.handleChange} type='text' name='email' />
                </div>
                <div className='form-input'>
                    <label htmlFor=''>Address</label>
                    <input onInput={this.handleChange} type='text' name='address.street' />
                    <input onInput={this.handleChange} type='text' name='address.city' />
                    <input onInput={this.handleChange} type='text' name='address.zip' />
                </div>
                <input type='submit' value='Save!' />
            </form>
        </div>
        )
    }
}

export default NewClientContainer

// import { selector } from 'recoil'
// import { userState } from '../../recoil/atoms'
// import { useHistory } from 'react-router-dom'

// function NewClient({props}) {
//     const [firstName, setFirstName] = useState('')
//     const [lastName, setLastName] = useState('')
//     const [phoneNumber, setPhoneNumber] = useState('')
//     const [email, setEmail] = useState('')
//     const [address, setAddress] = useState({})
//     const [pets] = useState([{}])
//     const [user, setUser] = useState()
//     let history = useHistory()

//     function newAddress() {
//         const []
//     }
    
//     const getUser = selector({
//         key: 'getUser',
//         get: ({ get }) => {
//             const user = get(userState);
//             if(user) {
//                 console.log('newclient', user)
//                 setUser(user)
//             } else setUser()
//         }
//     })

//     function handleSubmit(event) {
//         event.preventDefault()

//         ClientModel.create({ firstName, lastName, phoneNumber, email, address, pets, user })
//             .then(data => {
//                 history.push('/clients')
//             })
//     }

//     return (
//         <div>
//             <h2>New Client</h2>
//             <form onSubmit={handleSubmit}>
//                 <div className='form-input'>
//                     <label htmlFor='firstName'>First Name</label>
//                     <input type='text' name='firstName' onChange={(e) => setFirstName(e.target.value)} value={firstName} />
//                 </div>
//                 <div className='form-input'>
//                     <label htmlFor='lastName'>Last Name</label>
//                     <input type='text' name='lastName' onChange={(e) => setLastName(e.target.value)} value={lastName} />
//                 </div>
//                 <div className='form-input'>
//                     <label htmlFor='phoneNumber'>Phone Number</label>
//                     <input type='text' name='phoneNumber' onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber} />
//                 </div>
//                 <div className='form-input'>
//                     <label htmlFor='email'>Email</label>
//                     <input type='text' name='email' onChange={(e) => setEmail(e.target.value)} value={email} />
//                 </div>
//                 <div className='form-input'>
//                     <label htmlFor='address'>Address</label>
//                     <input type='text' name='addressStreet' onChange={(e) => setAddress().street = e.target.value} value={address.street} />
//                     <input type='text' name='addressCity' onChange={(e) => setAddress(e.target.value).street} value={address.city} />
//                     <input type='text' name='addressZip' onChange={(e) => setAddress(e.target.value).zip} value={address.zip} />
//                 </div>
//                 {/* <div className='form-input'>
//                     <label htmlFor='pets'>Pets</label>
//                     { pets ?
//                     <>
//                     <label>Name: </label>
//                     <input type='text' name='petName' onChange={(e) => setPets( [0].name, { name: e.target.value})} value='dog name' />
//                     <label>Breed: </label>
//                     <input type='text' name='petBreed' onChange={(e) => setPets( [0].breed, { breed: e.target.value})} value='dog breed' />
//                     <label>Size:</label>
//                     <input type='text' name='petSize' onChange={(e) => setPets( [0].size, { size: e.target.value})} value='dog size' />
//                     </>
//                     :
//                     'Loading'
//                     }
//                 </div> */}
//                 <input type='submit' value='Save!' />
//             </form>
//         </div>
//     )
// }

// export default NewClient

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