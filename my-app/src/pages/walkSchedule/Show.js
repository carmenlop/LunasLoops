import React from 'react'

import WalkCard from '../../components/WalkCard'
import useClients from '../../hooks/useClients'
import useWalkSchedule from '../../hooks/useWalks'
import { Container, Row, Col} from 'react-bootstrap'

function WalkScheduleShow(props) {
    const [walkSchedule] = useWalkSchedule(props.match.params.id)
    // console.log(walkSchedule)
    const [client] = useClients(walkSchedule.client)

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Client: {client.firstName}</h3>
                    <WalkCard {...walkSchedule} />
                </Col>
            </Row>
        </Container>
    )
}

export default WalkScheduleShow