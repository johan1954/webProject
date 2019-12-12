import React, {useState, useEffect} from 'react';
import '../navBar.css';
import {cookieChecker} from './loginChecker';
import { Link, Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux';
import Cookies from 'js-cookie';

function App() {

  const [username, setUsername] = useState("");
  const isLogged = useSelector(state => state.logger);

  useEffect(() => {
    getUsername();
  }, []);

  async function getUsername (){
    let username = await cookieChecker();
    setUsername(username);
  }

  return (
    <div className="navBar">
        {isLogged ?
        <ul className="loggedInContent">
          Logged as: 
          <div>{username}</div>
        </ul>
        : <Redirect to='/'/>}
        <Link className="linkStyle" to='/'>
        <ul className="navBarContent">
          Home
        </ul>
        </Link>
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