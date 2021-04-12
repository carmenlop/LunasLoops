import React from 'react'

const ClientCard = (props) => {

    return (
        <div className='clientCard'>
            <h3>{props.firstName}</h3>
            <ul>Contact Info:
                <li>Phone Number: {props.phoneNumber}</li>
                <li>Address: {props.address}</li>
                <li>Email: {props.email}</li>
                <li>Pet: {props.pet}</li>
            </ul>
        </div>
    )
}

export default ClientCard