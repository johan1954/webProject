import React, {useState} from 'react';
import '../login.css';
import {useSelector, useDispatch} from 'react-redux';

function Login() {

    const urlMain = "http://nodejs-mongo-persistent-course-project.rahtiapp.fi/";

    const loggedIn = useSelector(state => state.login);
    const usernameAtUse = useSelector(state => state.username);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [returnPassword, setReturnPassword] = useState("null"); 
    let searchUsername, searchPassword;

    async function loginFunction () {
        let data, jsonData;
        data = await fetch(urlMain + "users/" + searchUsername);
        try {
            jsonData = await data.json();
        }
        catch {
            return;
        }
        if (jsonData != null) {
            if (jsonData.password === searchPassword) {
                console.log("Auth is okay!");
            }
        }

        data = await fetch(urlMain + "users/users");
        jsonData = await data.json();
        try {
            jsonData = await data.json()
        }
        catch {}
        console.log(jsonData);
    }  

    function updateVars(){
        searchUsername = username;
        searchPassword = password;
    }

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
                <button onClick={(event) => <div>{updateVars(),loginFunction()}</div>}>Login</button>
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
                <button onClick={() => {document.cookie = ("username=jasonMomoa")}}>Create account</button>

            </div>
        </div>
    )
}

export default Login;