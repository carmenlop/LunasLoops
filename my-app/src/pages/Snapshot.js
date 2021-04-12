import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { userState } from '../recoil/atoms'
import AuthModel from '../models/auth'

import ClientCard from '../components/ClientCard'
import WalkCard from '../components/WalkCard'
import useClients from '../hooks/useClients'
import useWalkSchedule from '../hooks/useWalks' 

import { Container, Row, Col} from 'react-bootstrap'

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
                <Col>Luna's Loops Snapshot Page!!</Col>
                <Col>{user.username}</Col>
            </Row>
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