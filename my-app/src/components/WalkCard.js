import React from 'react'

const WalkCard = (props) => {
    console.log('date', props.walkDate)
    // 2021-04-08T00:00:00.000Z
    
    const date = (props.walkDate) 
    ?
        new Intl.DateTimeFormat("en-GB", {dateStyle: 'full'}).format(props.walkDate)
    :
        '..'
    
    return (
        <div className='WalkCard'>
            <h3>{date}</h3>
            <h3>{props.startTime}</h3>
            <h3>{props.duration}</h3>
            <h3>{props.pet}</h3>
        </div>
    )
}

export default WalkCard