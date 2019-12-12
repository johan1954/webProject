import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './navBar.css';
import Feed from './routes/feed';
import Profile from './routes/profile';
import Login from './routes/login';
import Nav from './components/navBar';
import {useDispatch} from 'react-redux';
import {login, logout} from './actions';
import {cookieChecker} from './components/loginChecker';

function App() {
  // Inititiate store dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    cookieLogin();
  }, []);

  async function cookieLogin () {
    let username = await cookieChecker();
    console.log(username);
    if (username == null) {
      dispatch(logout());
    }
    else {
      dispatch(login());
    }
  }

  // Funtion to check if there is an existing log in at use
//   async function cookieChecker() {
//     let data, jsonData, usernameid, userArray;
//     usernameid = Cookies.get('usernameid');
//     if( usernameid != null) {
//       userArray = usernameid.split("-");
//       try {
//         data = await fetch(address + "users/" + userArray[0]);
//         jsonData = await data.json();
//         console.log(jsonData);
//       }
//       catch (err) {
//         console.log(err);
//         return;
//       }
//     }
// /*     console.log(usernameid); */
//     // Handle error, if json is empty
//     if (jsonData != undefined) {
//       // Check for id, if it is the same as the users database equivalent
//       if (jsonData._id === userArray[1]) {
//         dispatch(login());
        
//       }
//       else {
//         dispatch(logout());
//       }
//     }
//   }

  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/feed" component={Feed}/>
          <Route path="/profile" component={Profile}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App;