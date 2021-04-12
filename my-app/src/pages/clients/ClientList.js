import React from 'react'
import { Link } from 'react-router-dom'

import ClientCard from '../../components/ClientCard'
import useClients from '../../hooks/useClients'
import { Button } from 'react-bootstrap'


function ClientList(props) {
    const [clients, fetchClients] = useClients()

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
            <Button variant='outline-success'><Link to='/clients/new'>Add Client!</Link></Button>
            { clients.length ? generateList(clients) : "No Clients"}
        </div>
    )
}

export default ClientList; 