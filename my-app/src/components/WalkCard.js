import React from 'react'

const WalkCard = (props) => {
    // console.log('date', props.walkDate)
    // // 2021-04-08T00:00:00.000Z
    
    // const date = (props.walkDate) 
    // ?
    //     new Intl.DateTimeFormat("en-GB", {dateStyle: 'full'}).format(props.walkDate)
    // :
    //     '..'
    
    return (
        <div className='walkCard'>
            <h4>{props.walkDate} at {props.startTime}</h4>
            <h4>{props.duration} minutes</h4>
        </div>
    )
}

export default WalkCard
{/* <h3>{props.client}</h3> */}