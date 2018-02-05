import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Admin from './Components/admin';
import Genre from './Components/Genre'
import Home from './Components/Home';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      route: window.location.hash.substr(1)
    }
  }
  componentDidMount() {
    window.addEventListener('hashchange', () => {
      this.setState({
        route: window.location.hash.substr(1)
      })
    })
  }
  render() {
    let Child

    switch (this.state.route) {
      case '/admin': Child = Admin; break;
      case '/genre': Child = Genre; break;
      default: Child = Home;
    }

    return (
      <div className='container'>
        <h1>App</h1>
        <ul>
          <li><a href='#/admin'>Admin</a></li>
          <li><a href='#/genre'>Genre</a></li>
        </ul>
        <Child />
      </div>
    )

  }
}
