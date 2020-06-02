import React from "react";
import { Link } from "react-router-dom";

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    return dispatch(this.props.logout);
  }

  render() {
    return (
      <>
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
      </>
    );
  }
}

export default Splash;
