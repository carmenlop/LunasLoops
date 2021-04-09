import React from 'react'
import { Link } from 'react-router-dom'

import WalkCard from '../../components/WalkCard'
import useWalkSchedule from '../../hooks/useWalks'


function WalkScheduleList(props) {
    const [walkSchedule, fetchWalkSchedule] = useWalkSchedule()

    function generateList(walkSchedule) {
        return walkSchedule.map((walk, index) => (
            <Link to={`/walk-schedule/${walk._id}`} key={ index }>
                <WalkCard {...walk} />
            </Link>
        ))
    }

    return (
        <div>
            <h1>All Walks</h1>
            <Link to={'/walk-schedule/new'}>New Walk</Link><br></br>
            { walkSchedule.length ? generateList(walkSchedule) : "No Walks on Schedule"}
        </div>
    )
}

export default WalkScheduleList; 