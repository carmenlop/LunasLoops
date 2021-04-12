import React from 'react'
import { Link } from 'react-router-dom'

import ClientCard from '../../components/ClientCard'
import useClients from '../../hooks/useClients'
import { Button } from 'react-bootstrap'
import { Container, Row, Col} from 'react-bootstrap'

function ClientList(props) {
    const [clients, fetchClients] = useClients()

    function generateList(clients) {
        return clients.map((client, index) => (
            <Row>
                <Col>
                    <Link to={`/clients/${client._id}`} key={ index }>
                        <ClientCard {...client} />
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
                        <h1>All Clients</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button variant='outline-success'><Link to='/clients/new'>Add Client!</Link></Button>
                    </Col>
                </Row>
            </div><br></br>
            { clients.length ? generateList(clients) : "No Clients"}
        </Container>
    )
}

export default ClientList; 