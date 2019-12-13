import React from 'react';
import '../navBar.css';
import { Link, Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux';

function App() {

  const isLogged = useSelector(state => state.logger);

  return (
    <div className="navBar">
        {isLogged ? 
        <Redirect to="/feed"/>: 
        <Link className="linkStyle" to='/'>
        <ul className="navBarContent">
          Home
        </ul>
        </Link>}
        {isLogged ? 
        <Link className="linkStyle" to='/feed'>
        <ul className="navBarContent">
          Feed
        </ul>
        </Link>
        : <Redirect to="/"/>}
        {isLogged ? 
        <Link className="linkStyle" to='/profile'>
        <ul className="navBarContent">
          Profile
        </ul>
        </Link>
        : <Redirect to="/"/>}
      </div>
  )
}

export default App;