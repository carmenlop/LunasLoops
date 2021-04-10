import { useState, useEffect } from 'react'
import ClientModel from '../models/client'

function useClients(clientId) {
    console.log('Hook top clientId', clientId)
    const [clients, setClients] = useState([])

    function fetchClients(id) {
        console.log('FetchClients', id)
        if (id) {
            console.log('HookIf', id)
            ClientModel.show(id).then((data) => {
                console.log('Hook If data', data)
                setClients(data.clients)
            })
        } else {
            ClientModel.all().then((data) => {
                console.log('HookElse', data)
                setClients(data.clients)
            })
        }
    }

    useEffect(
        function () {
            console.log('HookCheck', clientId)
            fetchClients(clientId)
        },
        [clientId]
    )

    return [clients, fetchClients]
}

export default useClients
