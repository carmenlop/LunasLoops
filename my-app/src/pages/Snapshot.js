import React from 'react'
import { Link } from 'react-router-dom'

import ClientCard from '../components/ClientCard'
import WalkCard from '../components/WalkCard'
import useClients from '../hooks/useClients'
import useWalkSchedule from '../hooks/useWalks' 

const Snapshot = () => {
    const [clients, fetchClients] = useClients()
    const [walkSchedule, fetchWalkSchedule] = useWalkSchedule()

    function generateClientList(clients) {
        return clients.map((client, index) => (
            <Link to={`/clients/${client._id}`} key={ index }>
                <ClientCard {...client} />
            </Link>
        ))
    }

    function generateWalkList(walkSchedule) {
        return walkSchedule.map((walk, index) => (
            <Link to={`/walk-schedule/${walk._id}`} key={ index }>
                <WalkCard {...walk} />
            </Link>
        ))
    }

    return (
        <div>
            <h1>Luna's Loops Snapshot Page!!</h1>
            { clients.length ? generateClientList(clients) : "No Clients"}
            { walkSchedule.length ? generateWalkList(walkSchedule) : "No Walks on Schedule"}
        </div>
    )
}

export default Snapshot; 