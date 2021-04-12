import React from 'react'

import useClients from '../../hooks/useClients'
import ClientCard from '../../components/ClientCard'

function ClientShow(props) {
    const [clients] = useClients(props.match.params.id)


    return (
        <div>
            <ClientCard {...clients} />
        </div>
    )
}

export default ClientShow