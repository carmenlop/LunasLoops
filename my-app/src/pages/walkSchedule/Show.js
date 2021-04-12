import React from 'react'

import WalkCard from '../../components/WalkCard'
import useClients from '../../hooks/useClients'
import useWalkSchedule from '../../hooks/useWalks'

function WalkScheduleShow(props) {
    const [walkSchedule] = useWalkSchedule(props.match.params.id)
    // console.log(walkSchedule)
    const [client] = useClients(walkSchedule.client)

    return (
        <div>
            <WalkCard {...walkSchedule} />
            <h3>Client: {client.firstName}</h3>
        </div>
    )
}

export default WalkScheduleShow