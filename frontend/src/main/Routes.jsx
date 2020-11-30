import React from 'react'
import { Switch, Route, Redirect, Link } from 'react-router'

import Home from '../components/home/Home'
import UserCrud from '../components/user/UserCrud'

export default props => 
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/users' component={UserCrud} />
        {/* <Route path='/register' component={} />
        <Route path='/recipe' component={} />
        <Route path='/account' component={} />
        <Route path='/exit' component={} /> */}
        <Redirect from='*' to='/' />
    </Switch>