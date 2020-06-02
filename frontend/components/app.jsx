import React from 'react';
import { Link, Route } from 'react-router-dom';

import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";
import Splash from "./splash";


const App = () => {
  return (
    <div>
      <Route exact path="/" component={Splash} />
      <Route path="/signup" component={SignupFormContainer} />
      <Route path="/login" component={LoginFormContainer} />
    </div>
  );
};

export default App;