import React from 'react'
import { Link } from 'react-router-dom'

import ClientCard from '../../components/ClientCard'
import useClients from '../../hooks/useClients'


function ClientList(props) {
    const [clients, fetchClients] = useClients()
    console.log(clients)

    function generateList(clients) {
        return clients.map((client, index) => (
            <Link to={`/clients/${client._id}`} key={ index }>
                <ClientCard {...client} />
            </Link>
        ))
    }

    return (
        <div>
            <h1>All Clients</h1>
            { clients.length ? generateList(clients) : "No Clients"}
        </div>
    )
}

export default ClientList; 