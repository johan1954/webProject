import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import '../login.css';
import address from '../config/config';
import {login} from '../actions/index'
import {useSelector, useDispatch} from 'react-redux';

function Login() {

    const dispatch = useDispatch();

    const loggedIn = useSelector(state => state.logger);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [createUser, setCreateUser] = useState("");
    const [createPass, setCreatePass] = useState("");
    const [createVerif, setVerif] = useState("");
    let searchUsername, searchPassword;

    const [auth, setAuth] = useState(true);

    async function loginFunction () {
        let data, jsonData;
        data = await fetch(address + "users/" + searchUsername);
        try {
            jsonData = await data.json();
        }
        catch {
            return;
        }
        // If there is a json from the database
        if (jsonData != undefined) {
            // Check the password, if the data matches set states to true and save login data to cookies.
            if (jsonData.password === searchPassword) {
                setAuth(true);
                console.log("Logged in");
                const tempString = jsonData.username+"-"+jsonData._id
                document.cookie = ("usernameid="+tempString);
            }
            else {
                setAuth(false);
            }
        }
        else{
            setAuth(false);
        } 
        data = await fetch(address + "users/users");
        jsonData = await data.json();
        try {
            jsonData = await data.json()
        }
        catch {}
        console.log(jsonData);
    }  

    async function createNewUser() {
        if (createPass === createVerif) {
            const saveBody = JSON.stringify({username: createUser, password: createPass});
            console.log(saveBody);

            const databaseResponse = await fetch(address+'users/setUser', {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: saveBody
            });
            const content = await databaseResponse.json();
            console.log(content);
        }
    }

    function updateVars() {
        searchUsername = username;
        searchPassword = password;
    }

    const getdata = (event) => {
        setUsername(this.username);
        
    }
    function loginEvent() {
        updateVars();
        loginFunction();
        dispatch(login());
    }

    function createEvent() {
        createNewUser();
        updateVars();
        loginFunction();
        dispatch(login());
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
                <button onClick={() => {loginEvent()}}>Login</button>
                {auth ? "" : <p className="Invalid">Invalid username or password!</p>}
                <h2>Create account:</h2>
                <p>Username:
                    <input 
                        type="text" 
                        onChange={event => setCreateUser(event.target.value)}>
                    </input>
                </p>
                <p>Password: 
                    <input 
                        type="password" 
                        onChange={event => setCreatePass(event.target.value)}>
                    </input>
                </p>
                <p>Password again: 
                    <input 
                        type="password" 
                        onChange={event => setVerif(event.target.value)}>
                    </input>
                </p>
                <button onClick={() => {createEvent()}}>Create account</button>
            </div>
        </div>
    )
}

export default Login;