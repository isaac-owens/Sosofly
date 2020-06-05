import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router-dom';
import React from 'react';

// renders component if logged out, otherwise if you're logged in redirects to the root url
const Auth = ({ component: Component, path, loggedIn, exact }) => {
  return (
    <Route path={path} exact={exact} render={(props) => (
      !loggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/account/overview" />
      )
    )}/>
  )
};

// renders component if logged in, otherwise redirects to the login page
const Protected = ({ component: Component, path, loggedIn, exact }) => {
  return (
    <Route path={path} exact={exact} render={(props) => (
    loggedIn ? (
      <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    )}/>
  )
};

const mSTP = state => {
  return {
    loggedIn: Boolean(state.session.id)
  }
}

export const AuthRoute = withRouter(connect(mSTP)(Auth));

export const ProtectedRoute = withRouter(connect(mSTP)(Protected));