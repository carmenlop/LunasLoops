import { useState, useEffect } from 'react'
import WalkScheduleModel from '../models/walkSchedule'

function useWalkSchedule(walkScheduleId) {
    const [walkSchedule, setWalkSchedule] = useState([])

    function fetchWalkSchedule(id) {
        if (id) {
            WalkScheduleModel.show(id).then((data) => {
                setWalkSchedule(data.walkSchedule)
            })
        } else {
            WalkScheduleModel.all().then((data) => {
                setWalkSchedule(data.walkSchedule)
            })
        }
    }

    useEffect(
        function () {
            console.log('we made it')
            fetchWalkSchedule(walkScheduleId)
        },
        [walkScheduleId]
    )

    return [walkSchedule, fetchWalkSchedule]
}

export default useWalkSchedule