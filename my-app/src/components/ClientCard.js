import React from 'react'

const ClientCard = (props) => {
    const address = `${props.address.street}, ${props.address.city} ${props.address.zip}`
    const petArray = props.pets

    function generateList(petArray) {
        return petArray.map((pet, index) => (
            <li key={ index }>{pet.name}</li>
        ))
    }

    return (
        <div className='ClientCard'>
            <h3>{props.firstName}</h3>
            <ul>Contact Info:
                <li>Phone Number: {props.phoneNumber}</li>
                <li>Address: {address}</li>
                <li>Email: {props.email}</li>
            </ul>
            <ul>Pets:
                { petArray.length ? generateList(petArray) : "No pets"}
            </ul>
            
        </div>
    )
}

export default ClientCard