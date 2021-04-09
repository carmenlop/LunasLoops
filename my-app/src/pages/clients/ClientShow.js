import React from 'react'

import useClients from '../../hooks/useClients'
import ClientCard from '../../components/ClientCard'

function ClientShow(props) {
    const [client] = useClients(props.match.params.id)
    console.log(client)

    return (
        <div>
            <ClientCard {...client} />
        </div>
    )
}

export default ClientShow