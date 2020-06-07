import React from 'react';
import { Route } from 'react-router-dom';

import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";
import Splash from "./splash";
import WebplayerContainer from "./webplayer_container";
import AccountContainer from "./account_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util"


const App = () => {
  let body = "body";
  
  return (
    <div className={body}>
      <Route exact path="/" component={Splash} />
      <ProtectedRoute path="/account/overview" component={AccountContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <Route path="/webplayer/" component={WebplayerContainer} />
    </div>
  );
};

export default App;