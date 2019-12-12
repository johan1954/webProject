import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import './navBar.css';
import Feed from './routes/feed';
import Profile from './routes/profile';
import Login from './routes/login';
import Nav from './components/navBar';
import {useSelector, useDispatch} from 'react-redux';
import {login, logout} from './actions';
import Cookies from 'js-cookie';
import address from './config/config';

function App() {
  // console.log(Cookies.get("usernameid"));
  const dispatch = useDispatch();
  const isLogged = useSelector(state => state.logger);

  async function cookieChecker() {
    let data, jsonData, usernameid, userArray;
    usernameid = Cookies.get('usernameid');
    if( usernameid != null) {
      userArray = usernameid.split("-");
      data = await fetch(address + "users/" + userArray[0]);
      try {
          jsonData = await data.json();
          console.log(jsonData);
      }
      catch {
          return;
      }
    }
    console.log(usernameid);

    // console.log(address + "users/" + userArray[0]);
    
    if (jsonData != undefined) {
      if (jsonData._id === userArray[1]) {
        // console.log("Id confirmed!");
        dispatch(login());
        
      }
      else {
        dispatch(logout());
      }
    }
  }
  cookieChecker();
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Login}/>
          {isLogged ? <>
            <Route path="/feed" component={Feed}/>
            <Route path="/profile" component={Profile}/>
          </> : <Redirect to="/"/>}
        </Switch>

      </div>
    </Router>
  )
}

export default App;




// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit and save to reload.
//         </p>
//         <button className="square" onClick={function() {alert('clicked!')}}>
//           Long button with wrapping the text
//         </button>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
