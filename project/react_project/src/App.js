import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './navBar.css';
import Feed from './routes/feed';
import Profile from './routes/profile';
import Login from './routes/login';
import Nav from './components/navBar';
import {useSelector} from 'react-redux';
import {login, logout} from './actions';

function App() {

  const isLogged = useSelector(state => state.loggedInReducer);

  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Login}/>
          {isLogged ? <div>
            <Route path="/feed" component={Feed}/>
            <Route path="/profile" component={Profile}/>
          </div> : <h2 className="NotLoggedInWarning">Please, log in to see other users' posts!</h2>
          }
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
