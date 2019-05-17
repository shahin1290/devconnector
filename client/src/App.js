import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import './App.css';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';

const  App = () => 
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path='/' component={Landing}/>

      <section>
        <Switch>
          <Route exact path='/register' component={Register}/>
          <Route exact path='/login' component={Login}/>

        </Switch>
      </section>
    </Fragment>
  </Router>
  


export default App;