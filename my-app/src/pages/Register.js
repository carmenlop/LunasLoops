import React, { useState } from 'react'

import AuthModel from '../models/auth'

import { Button, Container, Row, Col } from 'react-bootstrap'

function Register(props) {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        AuthModel.register({ username, email, password }).then((response) => {
            if (response.status === 201) {
                props.history.push('/login')
            }
        })
    }

    return (
        <Container>
            <Row>
                <Col>
                    <div className='formStyle'>
                        <h2>Register for Account!</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor='username'>Username</label>
                                <input
                                    type='text'
                                    name='username'
                                    onChange={e => setUsername(e.target.value)}
                                    value={username}
                                />
                            </div>
                            <div>
                                <label htmlFor='email'>Email</label>
                                <input
                                    type='text'
                                    name='email'
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                />
                            </div>
                            <div>
                                <label htmlFor='password'>Password</label>
                                <input
                                    type='password'
                                    name='password'
                                    onChange={e => setPassword(e.target.value)}
                                    value={password}
                                />
                            </div>
                            <Button variant='outline-success' type='submit'>Register</Button>
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Register;