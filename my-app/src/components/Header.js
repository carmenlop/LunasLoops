import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useRecoilState } from 'recoil'
import { userState } from '../recoil/atoms'
import AuthModel from '../models/auth'

import 'materialize-css'
// import { Dropdown, Button } from 'react-materialize'

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
                <ul>
                { user ? (
                    <>
                        
                            <li><Link to={'/snapshot'}>Snapshot</Link></li>
                            <li><Link to={'/clients'}>Clients</Link></li>
                            <li><Link to={'/pets'}>Pets</Link></li>
                            <li><Link to={'/walk-history'}>Walk History</Link></li>
                            <li><Link to={'/walk-schedule'}>Walk Schedule</Link></li>
                        
                        <button className='btn' onClick={ logout }>Log Out</button>
                    </>
                ) : (
                    <>
                        <li><Link to={'/login'}>Log In</Link></li>
                        <li><Link to={'/register'}>Register</Link></li>
                    </>
                )}
                </ul>
            </div>
        </header>
    )
}

export default Header;