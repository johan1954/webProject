import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import '../login.css';
import address from '../config/config';
import {useDispatch} from 'react-redux';
import {loginFunction, usernameCheck} from '../components/loginChecker';
import {login} from '../actions/index';

function Login() {

    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [createUser, setCreateUser] = useState("");
    const [createPass, setCreatePass] = useState("");
    const [createVerif, setVerif] = useState("");

    const [auth, setAuth] = useState(true);
    const [realAuth, setrAuth] = useState(false);

    const [boolErr, setErr] = useState(false);
    const [errMsg, setErrMsg] = useState("");

    async function executeLogin () {
        let loginBool = await loginFunction(username, password);
        if (loginBool === true) {
            dispatch(login());
            setAuth(true);
            setrAuth(true);
        }
        else {
            setAuth(false);
            setrAuth(false);
        }
    }  

    async function createNewUser() {
        const usernameExists = await usernameCheck(createUser);
        if (usernameExists === true) {
            setErrMsg("Username already exists!");
            setErr(true);
            return;
        }
        setErr(false);
        if (createPass.length < 1) {
            setErrMsg("Please define a password");
            setErr(true);
            return;
        }
        setErr(false);
        if (createPass === createVerif) {
            setErr(false);
            const saveBody = JSON.stringify({username: createUser, password: createPass});
            console.log(saveBody);
            try {
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
            catch (err) {
                console.log(err);
                return;
            }
            
        }
        else {
            setErrMsg("Passwords don't match!");
            setErr(true);
            return;
        }
        dispatch(login());
        loginFunction(createUser, createPass);
        setrAuth(true);
    }

    function loginEvent() {
        executeLogin();
    }

    function createEvent() {
        createNewUser();
        
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
                {auth ? "" : <p className="Invalid">Invalid username or password!</p>}
                <button onClick={() => {loginEvent()}}>Login</button>
                {realAuth ? <Redirect to="/feed"/> : ""}
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
                {boolErr ? <p className='Invalid'> {errMsg}</p> : ""}
                <button onClick={() => {createEvent()}}>Create account</button>
            </div>
        </div>
    )
}

export default Login;