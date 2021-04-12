import React from 'react'
import { Link } from 'react-router-dom'

import WalkCard from '../../components/WalkCard'
import useWalkSchedule from '../../hooks/useWalks'

import { Button, Container, Row, Col} from 'react-bootstrap'

function WalkScheduleList(props) {
    const [walkSchedule, fetchWalkSchedule] = useWalkSchedule()

    function generateList(walkSchedule) {
        return walkSchedule.map((walk, index) => (
            <Row>
                <Col>
                    <Link to={`/walk-schedule/${walk._id}`} key={ index }>
                        <WalkCard {...walk} />
                    </Link>
                </Col>
            </Row>
        ))
    }

    return (
        <Container>
            <div className='listContainer'>
                <Row>
                    <Col>
                        <h1>All Walks</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant='outline-success'><Link to={'/walk-schedule/new'}>New Walk</Link></Button>
                    </Col>
                </Row>
            </div><br></br>
            { walkSchedule.length ? generateList(walkSchedule) : "No Walks on Schedule"}
        </Container>
    )
}

export default WalkScheduleList; 