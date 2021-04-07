import React, { useState } from 'react'

import AuthModel from '../models/auth'

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
        <div>
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

                <input type='submit' value='Register' />
            </form>
        </div>
    )
}

export default Register;