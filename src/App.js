import React from 'react';
import './App.css';
import Blog from './Blog/Blog';
import Galeria from './Galeria/Galeria';
import Users from './Users/Users';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const App = () => (
    <Router>
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item"><Link className="nav-link" to="/">Blog</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/galeria">Galeria</Link></li>
                        <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
                    </ul>
                </div>
            </nav>
            <Route exact path="/" component={Blog}/>
            <Route path="/galeria" component={Galeria}/>
            <Route path="/users" component={Users}/>
        </div>
    </Router>
)

export default App;

