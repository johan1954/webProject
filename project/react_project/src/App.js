import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './navBar.css';
import Feed from './routes/feed';
import Profile from './routes/profile';
import Nav from './components/navBar';

function App() {

  let loggedIn = 0;
  if (loggedIn == 0) {

  }
  

  return (
    <Router>
      <div>
        <Nav/>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/feed" component={Feed}/>
          <Route path="/profile" component={Profile}/>
        </Switch>
        </div>
    </Router>
  )
}

const Login = () => (
  <div className="App">
    <h1>Not logged in!</h1>
  </div>
)

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
