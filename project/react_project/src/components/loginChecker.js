function loginChecker(username, password, id) {
    let data, jsonData;
    data = await fetch(address + "users/" + username);
    try {
        jsonData = await data.json();

    }
    catch {
        return;
    }
    // If there is a json from the database
    if (jsonData != undefined) {
        if (id !== "") {
            if (jsonData._id == id) {
                console.log("Logged in from session id");
                return true;
            }
        }
        // Check the password, if the data matches set states to true and save login data to cookies.
        if (jsonData.password === password) {
            console.log("Logged in");
            document.cookie = ("usernameid="+jsonData.username+jsonData._id);
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

export default loginChecker;