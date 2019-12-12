import React, {useState} from 'react';
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
    const [returnPassword, setReturnPassword] = useState("null"); 
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
                <button onClick={() => <p>{updateVars(),loginFunction(), dispatch(login())}</p>}>Login</button>
                {auth ? "" : <p className="Invalid">Invalid username or password!</p>}
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