import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Blog from './Blog/Blog';
import Galeria from './Galeria/Galeria';
import Users from './Users/Users';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


const App = () => (
  <Router>
    <div className = "container-flex ">
      <ul className = "row align-items-center list-unstyled" >
        <Link  className = "col-1" to="/">Blog</Link>
        <Link  className = "col-1" to="/galeria">Galeria</Link>
        <Link  className = "col-1" to="/users">Users</Link>
      </ul>

      <hr/>

      <Route exact path="/" component={Blog}/>
      <Route path="/galeria" component={Galeria}/>
      <Route path="/users" component={Users}/>
    </div>
  </Router>
)

export default App;

