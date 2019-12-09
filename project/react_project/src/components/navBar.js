import React, {useState} from 'react';
import '../navBar.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {

  return (
    <div className="navBar">
      
        <ul className="navBarContent">
          Feed
        </ul>
        <ul className="navBarContent">
          Profile
        </ul>
        <ul className="navBarContent">
          Settings
        </ul>
      </div>
  )
}

export default App;