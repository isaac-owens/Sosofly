import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';

import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import Splash from "./splash";
import WebplayerContainer from "./webplayer/webplayer_container";
import AccountContainer from "./account/account_container";

import { AuthRoute, ProtectedRoute } from "../util/route_util";



const App = () => {
  let body = "body";
  return (
    <div className={body}>
      <Switch>
      <Route exact path="/" component={Splash} />
      <ProtectedRoute exact path="/account/overview" component={AccountContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <ProtectedRoute path="/webplayer" component={WebplayerContainer} />
      </Switch>
    </div>
  );
};

export default withRouter(App);