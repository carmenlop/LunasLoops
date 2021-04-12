import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useRecoilState } from 'recoil'
import { userState } from '../recoil/atoms'
import AuthModel from '../models/auth'

import { Nav } from 'react-bootstrap'

const Header = () => {
    const [user, setUser] = useRecoilState(userState)

    useEffect(function () {
        if (localStorage.getItem('uid')) {
            AuthModel.verify().then((response) => {
                setUser(response.user)
            })
        }
    }, [])

    function logout() {
        setUser(null)
        localStorage.clear()
    }

    return (
        <Nav className='justify-content-end' activeKey='/home'>

            { user ? (
                <>
                <Nav.Item>
                    <Nav.Link><Link to='/snapshot'>Snapshot</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link><Link to='/clients'>Clients</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link><Link to='/walk-schedule'>Walk Schedule</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link><Link onClick={ logout }>Log Out</Link></Nav.Link>
                </Nav.Item>
                </>
            ): (
                <>
                <Nav.Item>
                    <Nav.Link><Link to='/login'>Log In</Link></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link><Link to='/register'>Register</Link></Nav.Link>
                </Nav.Item>
                </>
            )}

        </Nav>
    )
}

export default Header;