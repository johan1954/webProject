import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './navBar.css';
import Feed from './routes/feed';
import Profile from './routes/profile';

function App() {
  

  return (
    <Router>
      <div className="navBar">
        <ul>
          Feed
        </ul>
        <ul>
          Profile
        </ul>
        <ul>
          Settings
        </ul>
      </div>
        <Route path="/feed" component={Feed}/>
        
        <Route path="/profile" component={Profile}/>


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
