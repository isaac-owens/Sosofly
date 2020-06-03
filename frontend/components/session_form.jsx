import React from "react";
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    { this.props.formType === "login" ? (
      this.state = this.props.user
    ) : (
       this.state = this.props.user
    )
  }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
    .then(() => {
      return this.props.history.push("/account");
    });
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  render() {
    let loginForm = "login-form";
    let signupForm = "signup-form";

    return (
      <div>
        <ul>
          {this.props.errors.map((error, idx) => {
            return <li key={idx}>{error}</li>;
          })}
        </ul>

        <Link to="/">--- Logo Home Link ---</Link>
        {this.props.formType === "login" ? (
          <>
            <form onSubmit={this.handleSubmit}>
              <h1>
                <Link to="/">Spotify Logo Link</Link>
              </h1>
              <hr />
              <ul className={loginForm}>
                <li>
                  <input
                    type="text"
                    id="username"
                    onChange={this.update("username")}
                    value={this.state.username}
                  />
                </li>
                <li>
                  <input
                    type="password"
                    id="password"
                    onChange={this.update("password")}
                    value={this.state.password}
                  />
                </li>
                <li>
                  <button>LOG IN</button>
                </li>
                <li>
                  <hr />
                  <p>Don't have an account?</p>
                </li>
                <li>
                  <Link to="/signup">SIGN UP FOR SPOTIFY</Link>
                </li>
              </ul>
            </form>
          </>
        ) : (
          <div>
            <form onSubmit={this.handleSubmit}>
              <header>
              <h1>
                <Link to="/">Spotify Logo Link</Link>
              </h1>
              <span>Sign up for free to start listening.</span>
              </header>
              <ul className={signupForm}>
                <li>
                  <label htmlFor="email">
                    What's your email?
                    <input
                      type="text"
                      id="email"
                      placeholder="Enter your email."
                      onChange={this.update("email")}
                      value={this.state.email}
                    />
                  </label>
                </li>
                <li>
                  <label htmlFor="confirmEmail">
                    Confirm your email
                    <input
                      type="text"
                      id="confirmEmail"
                      placeholder="Enter your email again."
                      onChange={this.update("confirmEmail")}
                      value={this.state.confirmEmail}
                    />
                  </label>
                </li>
                <li>
                  <label htmlFor="password">
                    Create a password
                    <input
                      type="password"
                      id="password"
                      placeholder="Create a password."
                      onChange={this.update("password")}
                      value={this.state.password}
                    />
                  </label>
                </li>
                <li>
                  <label htmlFor="username">
                    What should we call you?
                    <input
                      type="text"
                      id="username"
                      placeholder="Enter a profile name."
                      onChange={this.update("username")}
                      value={this.state.username}
                    />
                  </label>
                  <p>This appears on your profile.</p>
                </li>
                <li>
                  <label htmlFor="birthdate">
                    What's your date of birth?
                    <input
                      type="date"
                      id="birthdate"
                      onChange={this.update("birthdate")}
                      value={this.state.birthdate}
                    />
                  </label>
                </li>
                <li>
                  <p>What's your gender?</p>
                  <label htmlFor="male">
                    Male
                    <input
                      type="radio"
                      id="male"
                      onChange={this.update("gender")}
                      value="male"
                    />
                  </label>
                  <label htmlFor="female">
                    Female
                    <input
                      type="radio"
                      id="female"
                      onChange={this.update("gender")}
                      value="female"
                    />
                  </label>
                  <label htmlFor="non-binary">
                    Non-Binary
                    <input
                      type="radio"
                      id="non-binary"
                      onChange={this.update("gender")}
                      value="non-binary"
                    />
                  </label>
                </li>
                <li>
                  <button>SIGN UP</button>
                </li>
                <li>
                  <p>
                    Have an account? <Link to="/login">Log in.</Link>
                  </p>
                </li>
              </ul>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default SessionForm;
