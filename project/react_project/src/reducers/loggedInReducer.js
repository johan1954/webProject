const loggedInReducer = (state = false, action) => {
    switch(action.type) {
        case 'LOGIN':
            return state = true;
        case 'LOGOUT':
            return state = false;
        default:
            return false;
    }
}

export default loggedInReducer;