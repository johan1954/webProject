import React, {useState} from 'react';
import '../login.css';
import {useSelector} from 'react-redux';

function Login() {

    const loggedIn = useSelector(state => state.login)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    


    const getdata = (event) => {
        setUsername(this.username);
        
    }
    function consoleLog() {
        console.log(username, password);
    }
    
    return (
        <div className="LoginWindow">
            <div className="LoginContent">
                <h1>Welcome to PineX discussion forum!</h1>
                <h2>Login:</h2>
                <p>Username: 
                    <input 
                        type="text" 
                        onChange={event => setUsername(event.target.value)}>
                    </input>
                </p>
                <p>Password: 
                    <input 
                        type="password" 
                        onChange={event => setPassword(event.target.value)}>
                    </input>
                </p>
                <button onClick={consoleLog}>Login</button>
                <h2>Create account:</h2>
                <p>Username: 
                    <input 
                        type="text" 
                        onChange={event => setUsername(event.target.value)}>
                    </input>
                </p>
                <p>Password: 
                    <input 
                        type="password" 
                        onChange={event => setPassword(event.target.value)}>
                    </input>
                </p>
                <p>Password again: 
                    <input 
                        type="password" 
                        onChange={event => setPassword(event.target.value)}>
                    </input>
                </p>
                <p></p>
                <button>Create account</button>

            </div>
        </div>
    )
}

export default Login;