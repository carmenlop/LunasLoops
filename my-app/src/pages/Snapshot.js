import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { userState } from '../recoil/atoms'
import AuthModel from '../models/auth'

import ClientCard from '../components/ClientCard'
import WalkCard from '../components/WalkCard'
import useClients from '../hooks/useClients'
import useWalkSchedule from '../hooks/useWalks' 

import { Container, Row, Col, Button} from 'react-bootstrap'

const Snapshot = () => {
    const [clients, fetchClients] = useClients()
    const [walkSchedule, fetchWalkSchedule] = useWalkSchedule()
    const [user, setUser] = useRecoilState(userState)

    useEffect(function () {
        if (localStorage.getItem('uid')) {
            AuthModel.verify().then((response) => {
                setUser(response.user)
            })
        }
    }, [])

    function generateClientList(clients) {
        return clients.map((client, index) => (
            <Link to={`/clients/${client._id}`} key={ index }>
                <ClientCard {...client} />
            </Link>
        ))
    }

    function generateWalkList(walkSchedule) {
        return walkSchedule.map((walk, index) => (
            <Link to={`/walk-schedule/${walk._id}`} key={ index }>
                <WalkCard {...walk} />
            </Link>
        ))
    }

    return (
        <Container>
            <Row>
                <Col className='listContainer'>
                    <h1>Clients</h1>
                    <Button variant='outline-success'><Link to='/clients/new'>Add Client!</Link></Button>
                </Col>
                <Col className='listContainer'>
                    <h1>Upcoming Walks</h1>
                    <Button variant='outline-success'><Link to={'/walk-schedule/new'}>New Walk</Link></Button>
                </Col>
            </Row>
            <br></br>
            <Row>
                <Col>
                    { clients.length ? generateClientList(clients) : "No Clients"}
                </Col>
                <Col>
                    { walkSchedule.length ? generateWalkList(walkSchedule) : "No Walks on Schedule"}
                </Col>
            </Row>
        </Container>
    )
}

export default Snapshot; 