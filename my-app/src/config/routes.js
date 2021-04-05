import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Clients from '../pages/Clients'
import Pets from '../pages/Pets'
import Snapshot from '../pages/Snapshot'
import WalkHistory from '../pages/WalkHistory'
import WalkSchedule from '../pages/WalkSchedule'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route exact path='/clients' component={ Clients } />
            <Route exact path='/pets' component={ Pets } />
            <Route exact path='/snapshot' component={ Snapshot } />
            <Route exact path='/walk-history' component={ WalkHistory } />
            <Route exact path='/walk-schedule' component={ WalkSchedule } />
        </Switch>
    )
}

export default Routes