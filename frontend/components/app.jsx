import React from 'react';
import { Link, Route } from 'react-router-dom';

import LoginFormContainer from "./login_form_container";
import SignupFormContainer from "./signup_form_container";


const App = () => {
  return (
    <div>
      <nav>
        <span>--- Header Nav ---</span>
        <h1>(Sosofly Logo Link)</h1>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </nav>
      <p>--- Splash Component Here--- </p>
      <footer>
        <span>--- Footer Nav ---</span>
        <h2>(Sosofly Logo Link)</h2>
        <p>--- Webplayer Link Here ---</p>
      </footer>

      <Route path="/signup" component={SignupFormContainer} />
      <Route path="/login" component={LoginFormContainer} />
    </div>
  );
};

export default App;