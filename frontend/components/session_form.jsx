import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
    this.props.processForm(this.state);
    // .then(() => {
    //   return this.props.history.push("/");
    // });
  }

  render() {
    return (
      <>
        {/* {this.props.formType === "login" ? <h1>Login</h1> : <h1>Signup</h1>}
        <ul>
          {this.props.errors.map((error, idx) => {
            return <li key={idx}>{error}</li>;
          })}
        </ul> */}

        <Link to="/">--- Logo Home Link ---</Link>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              id="username"
              onChange={this.update("username")}
              value={this.state.username}
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              id="password"
              onChange={this.update("password")}
              value={this.state.password}
            />
          </label>
          {this.props.formType === "login" ? (
              <button>LOG IN</button>
              ) : (
                <button>SIGN UP</button>
          )}
        </form>

        {this.props.formType === "login" ? (
          <>
            <p>Don't have an account?</p>
            <Link to="/signup">SIGN UP FOR SPOTIFY</Link>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </>
    );
  }
}

export default SessionForm;
