import React from 'react';
import { Route } from 'react-router-dom';

import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import Splash from "./splash";
import WebplayerContainer from "./webplayer/webplayer_container";
import AccountContainer from "./account/account_container";
import Modal from './modal/modal';

import { AuthRoute, ProtectedRoute } from "../util/route_util"


const App = () => {
  let body = "body";
  
  return (
    <div className={body}>
      <Modal />
      <Route exact path="/" component={Splash} />
      <ProtectedRoute path="/account/overview" component={AccountContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <ProtectedRoute path="/webplayer" component={WebplayerContainer} />
    </div>
  );
};

export default App;