import Cookies from 'js-cookie';
import address from '../config/config';

const databaseHook = async (username) => {
    let data, jsonData;
    try {
        data = await fetch(address + "users/" + username);
        if (data == null) {
            console.log("invalid cookie for login");
            return null;
        }
        jsonData = await data.json();
        return jsonData;
    }
    catch (err) {
        console.log(err);
        return null;
    }   
}

export const cookieChecker = async () => {
    let splitCookie, jsonData, cookie;
    cookie = Cookies.get("usernameid");
    if (cookie == null) {
        return null;
    }
    splitCookie = cookie.split("-");
    jsonData = await databaseHook(splitCookie[0]);
    // If there is a json from the database
    if (jsonData != null) {
        if (splitCookie[1].length > 1) {
            if (jsonData._id === splitCookie[1]) {
                console.log("Previous login recognized.");
                return splitCookie[0];
            }
        }
        else {
            return null;
        }
    }
    else{
        return null;
    } 
}

export const loginFunction = async (searchUsername, searchPassword) => {
    if (searchPassword.length < 1 || searchUsername.length < 1) {
        return false;
    }
    console.log("got through the check");
    let jsonData;
    jsonData = await databaseHook(searchUsername);
    // If there is a json from the database
    if (jsonData !== undefined) {
        // Check the password, if the data matches set states to true and save login data to cookies.
        if (jsonData.password === searchPassword) {
            console.log("Logged in as "+ jsonData.username);
            const tempString = jsonData.username+"-"+jsonData._id
            document.cookie = ("usernameid="+tempString);
            return true;
        }
        else {
            return false;
        }
    }
    else{
        return false;
    } 
}  

