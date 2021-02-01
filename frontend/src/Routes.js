import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import HomePage from './HomePage'
import Admin from './Admin'
import SignUp from './SignUp'

function Routes(){

    return (
            <Switch>
                <Route exact path='/'>
                    <HomePage/>
                </Route> 
                <Route exact path ='/admin'>
                    <Admin/>
                </Route>
                <Route exact path='/signup'>
                    <SignUp/> 
                </Route>
                <Redirect to='/'/>
            </Switch>
    )
}

export default Routes