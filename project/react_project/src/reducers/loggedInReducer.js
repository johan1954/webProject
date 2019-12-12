const loggedInReducer = (state = false, action) => {
    switch(action.state) {
        case 'login':
            return state = true;
        case 'logout':
            return state = false;
        default:
            return false;
    }
}

export default loggedInReducer;