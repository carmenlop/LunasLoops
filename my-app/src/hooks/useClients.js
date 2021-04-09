import { useState, useEffect } from 'react'
import ClientModel from '../models/client'

function useClients(clientId) {
    const [clients, setClients] = useState([])

    function fetchClients(id) {
        if (id) {
            ClientModel.show(id).then((data) => {
                setClients(data.client)
            })
        } else {
            ClientModel.all().then((data) => {
                setClients(data.clients)
            })
        }
    }

    useEffect(
        function () {
            fetchClients(clientId)
        },
        [clientId]
    )

    return [clients, fetchClients]
}

export default useClients