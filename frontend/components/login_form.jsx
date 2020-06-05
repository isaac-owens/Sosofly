import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(() => {
      return this.props.history.push("/account");
    });
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
      this.update = this.update.bind(this);
    };
  }

  render() {
    let logoLink = "logo-link";

    let loginForm = "login-form";
    let loginFormBody = "login-form-body";
    let loginFormHeader = "login-form-header";
    let loginErrorsContainer ="login-errors-container";
    let loginErrors = "login-errors";
    let loginLink = "login-link";
    let linkCaption = "link-caption";

    let errorMessage = "error-message";


    let sosoflyLogo = <FontAwesomeIcon icon={faCompactDisc} size="2x" />;

    return (
      <form onSubmit={this.handleSubmit} className={loginForm}>
  
        <header className={loginFormHeader}>
          <Link to="/" className={logoLink}>
            {sosoflyLogo} Sosofly
                    </Link>
        </header>
        <hr />


        <main className={loginFormBody}>
          <div className={loginErrorsContainer}>
            <p className={loginErrors}>
              <span>
                {this.props.errors[0]}
              </span>
            </p>
          </div>
          <ul>
            <li>
              <input
                type="text"
                id="username"
                onChange={this.update("username")}
                value={this.state.username}
              />
              {this.state.username === "" ? (
                <span className={errorMessage}>
                  Please enter your username
                </span>
              ) : (
                  ""
                )}
            </li>
            <li>
              <input
                type="password"
                id="password"
                onChange={this.update("password")}
                value={this.state.password}
              />
              {this.state.password === "" ? (
                <span className={errorMessage}>
                  Please enter your password.
                </span>
              ) : (
                  ""
                )}
            </li>
            <li>
              <button>LOG IN</button>
            </li>
            <li>
              <hr />
              <p className={linkCaption}>Don't have an account?</p>
            </li>
            <li>
              <Link to="/signup" className={loginLink}>
                SIGN UP FOR SOSOFLY
              </Link>
            </li>
          </ul>
        </main>
      </form>
    )
  }
}

export default LoginForm;