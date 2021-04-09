import React from 'react'

const WalkCard = (props) => {
    return (
        <div className='WalkCard'>
            <h3>{props.walkDate}</h3>
            <h3>{props.startTime}</h3>
            <h3>{props.duration}</h3>
        </div>
    )
}

export default WalkCard