import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    return dispatch(this.props.logout);
  }

  render() {
    return this.props.currentUser ? (
      <>
        <h1>Hello {this.props.currentUser.user.username}</h1>
        <button onClick={this.handleClick}>Logout</button>
      </>
    ) : (
      <>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
      </>
    );
  }
}

export default Greeting;
