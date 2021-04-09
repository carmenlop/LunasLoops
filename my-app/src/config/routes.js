import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { useRecoilValue } from 'recoil'
import{ loggedInState } from '../recoil/selectors'

import Home from '../pages/Home'
import ClientList from '../pages/clients/ClientList'
import ClientShow from '../pages/clients/ClientShow'
import NewClient from '../pages/clients/NewClient'
import Pets from '../pages/Pets'
import Snapshot from '../pages/Snapshot'
import WalkHistory from '../pages/WalkHistory'
import WalkSchedule from '../pages/WalkSchedule'
import Register from '../pages/Register'
import Login from '../pages/Login'

const Routes = () => {
    const loggedIn = useRecoilValue(loggedInState)

    return (
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/register' component={ Register } />
            <Route exact path='/login' component={ Login } />
            { loggedIn && (
                <Switch>
                    <Route exact path='/clients' component={ ClientList } />
                    <Route exact path='/clients/:id' component={ ClientShow } />
                    <Route exact path='/clients/new' component={ NewClient } />
                    <Route exact path='/pets' component={ Pets } />
                    <Route exact path='/snapshot' component={ Snapshot } />
                    <Route exact path='/walk-history' component={ WalkHistory } />
                    <Route exact path='/walk-schedule' component={ WalkSchedule } />
                </Switch>
            ) }
        </Switch>
    )
}

export default Routes