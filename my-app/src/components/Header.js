import React from 'react'
import { Link } from 'react-router-dom'

import 'materialize-css'
import { Dropdown, Button } from 'react-materialize'

const Header = () => {
    return (
        <header>
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
        </header>
    )
}

export default Header;