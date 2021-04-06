import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useRecoilState } from 'recoil'
import { userState } from '../recoil/atoms'
import AuthModel from '../models/auth'

import 'materialize-css'
import { Dropdown, Button } from 'react-materialize'

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
        <header>
            <div className='logo'>
                <Link to={'/'}>Luna's Loops</Link>
            </div>
            <div className='links'>
                { user ? (
                    <div>
                        <Dropdown
                            id="Dropdown_6"
                            options={{
                                alignment: 'left',
                                autoTrigger: true,
                                closeOnClick: true,
                                constrainWidth: true,
                                container: null,
                                coverTrigger: true,
                                hover: false,
                                inDuration: 150,
                                onCloseEnd: null,
                                onCloseStart: null,
                                onOpenEnd: null,
                                onOpenStart: null,
                                outDuration: 250
                            }}
                            trigger={<Button node="button">My Account</Button>}
                        >
                            <Link to={'/snapshot'}>Snapshot</Link>
                            <Link to={'/clients'}>Clients</Link>
                            <Link to={'/pets'}>Pets</Link>
                            <Link to={'/walk-history'}>Walk History</Link>
                            <Link to={'/walk-schedule'}>Walk Schedule</Link>
                        </Dropdown>
                        <button className='btn' onClick={ logout }>Log Out</button>
                    </div>
                ) : (
                    <div>
                        <Link to={'/login'}>Log In</Link>
                        <Link to={'/register'}>Register</Link>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header;