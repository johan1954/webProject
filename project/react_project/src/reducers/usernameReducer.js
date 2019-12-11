const usernameReducer = (state = "", action) => {
    switch(action.type) {
        case newUsername:
            return ;
        default:
            return "";
    }
}

export default usernameReducer;