import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../component/Home';
import Login from '../component/Login'


const Routes=()=>{
    return(
        <Switch>
        <Route path ='/' exact component={Home}/>
        <Route path ='/login' component={Login}/>
        </Switch>
    )
}
export default Routes;