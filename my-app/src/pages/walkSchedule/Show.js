import React from 'react'

import WalkCard from '../../components/WalkCard'
import useWalkSchedule from '../../hooks/useWalks'

function WalkScheduleShow(props) {
    const [walkSchedule] = useWalkSchedule(props.match.params.id)

    return (
        <div>
            <WalkCard {...walkSchedule} />
        </div>
    )
}

export default WalkScheduleShow