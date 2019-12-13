const postingReducer = (state = false, action) => {
    switch(action.type) {
        case 'CREATE':
            return state = true;
        case 'DONE':
            return state = false;
        default:
            return state;
    }
}

export default postingReducer;