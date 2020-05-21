const loggedReducer = (state=false, action) => {
    switch(action.type){
        case 'LOGIN_OUT':
            return !state;
        default:
            return state;
    }
};

export default loggedReducer;