import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyBlog from './Blog/Blog'; 
import Galeria from './Galeria/Galeria';
import Users from './Users/Users';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


const BasicExample = () => (
  <Router>
    <div className = "Container">
      <div className = "MenuContainer">
          <ul className = "MenuLists">
            <li><Link className = "List" to="/">MyBlog</Link></li>
            <li><Link className = "List" to="/galeria">Galeria</Link></li>
            <li><Link className = "List" to="/users">Users</Link></li>
          </ul>
        </div>
        <hr/>
        
        <Route exact path="/" component={MyBlog}/>
        <Route path="/galeria" component={Galeria}/>
        <Route path="/users" component={Users}/>
    </div>
  </Router>
)

export default BasicExample;
