import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import Splash from "./splash";
import WebplayerContainer from "./webplayer/webplayer_container";
import AccountContainer from "./account/account_container";

import { AuthRoute, ProtectedRoute } from "../util/route_util";
import PlaylistShow from './playlist/playlist_show';


const App = () => {
  let body = "body";
  
  return (
    <div className={body}>
      <Switch>
      <Route exact path="/" component={Splash} />
      <ProtectedRoute path="/account/overview" component={AccountContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      {/* Route below for testing */}
      <Route exact path="/webplayer/playlist" component={PlaylistShow} />
      <ProtectedRoute path="/webplayer" component={WebplayerContainer} />

      </Switch>
    </div>
  );
};

export default App;