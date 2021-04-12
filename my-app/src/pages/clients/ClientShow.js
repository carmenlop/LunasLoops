import React from 'react'

import useClients from '../../hooks/useClients'
import ClientCard from '../../components/ClientCard'

import { Container, Row, Col} from 'react-bootstrap'

function ClientShow(props) {
    const [clients] = useClients(props.match.params.id)


    return (
        <Container>
            <Row>
                <Col>
                    <ClientCard {...clients} />
                </Col>
            </Row>
        </Container>
    )
}

export default ClientShow