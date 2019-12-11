import React, {useState} from 'react';
import '../navBar.css';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';

function App() {

  return (
    <div className="navBar">
        <Link className="linkStyle" to='/'>
        <ul className="navBarContent">
          Home
        </ul>
        </Link>
        <Link className="linkStyle" to='/feed'>
        <ul className="navBarContent">
          Feed
        </ul>
        </Link>
        <Link className="linkStyle" to='/profile'>
        <ul className="navBarContent">
          Profile
        </ul>
        </Link>
        <Link className="linkStyle" to='/settings'>
        <ul className="navBarContent">
          Settings
        </ul>
        </Link>
      </div>
  )
}

export default App;