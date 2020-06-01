export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";  

//regular action creators
export const receiveCurrentUser = (currentUser) => { 
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser,
        };
} 

export const logoutCurrentUser = () => {
    return{
        type: LOGOUT_CURRENT_USER,
    };
}

export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors: errors.responseJSON,
    }
}


//thunk action creator
export const login = (user) => dispatch=> {
    return APIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)), 
          errors => dispatch(receiveErrors(errors)));
}

export const signup = (user) => dispatch=> {
  return APIUtil.signup(user)
  .then(user => dispatch(receiveCurrentUser(user)),
        errors => dispatch(receiveErrors(errors)));
}

export const logout = () => dispatch=> {
    return APIUtil.logout().then(() => dispatch(logoutCurrentUser()));
}