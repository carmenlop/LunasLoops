import React, { useState } from 'react'
import WalkScheduleModel from '../../models/walkSchedule'

function WalkScheduleNew({props}) {
    const [walkDate, setWalkDate] = useState("1")
    const [startTime, setStartTime] = useState("1")
    const [duration, setDuration] = useState(0)

    function handleSubmit(event) {
        event.preventDefault()

        WalkScheduleModel.create({ walkDate, startTime, duration })
            .then(data => {
                props.history.push('/walk-schedule')
            })
    }

    return (
        <div>
            <h1>New Walk</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-input'>
                    <label htmlFor='walkDate'>Walk Date
                        <input type='text' name='walkDate' onChange={(e) => setWalkDate(e.target.value)} value={walkDate} />
                    </label>
                </div>
                <div className='form-input'>
                    <label htmlFor='startTime'>Walk Time</label>
                    <input type='text' name='startTime' onChange={(e) => setStartTime(e.target.value)} value={startTime} />
                </div>
                <div className='form-input'>
                    <label htmlFor='duration'>Duration</label>
                    <input type='text' name='duration' onChange={(e) => setDuration(e.target.value)} value={duration} />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default WalkScheduleNew; 