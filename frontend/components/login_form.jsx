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
      return this.props.history.push("/account/overview");
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
    
    let errorMessage = "error-message";
    
    let loginFormInputs = "login-form-inputs";
    let dataInputField = "data-input-field";
    let loginButtonField = "login-button-field";
    let loginButton = "login-button";
    let loginLinkField = "login-link-field";
    let loginLink = "login-link";
    let lineDividor = "line-dividor";
    let linkCaptionField = "link-caption-field";
    let linkCaption = "link-caption";



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
          {this.props.errors.length === 0 ? (
            <></>
          ) : (
            <div className={loginErrorsContainer}>
              <p className={loginErrors}>
                <span>{this.props.errors[0]}</span>
              </p>
            </div>
          )}
          <ul className={loginFormInputs}>
            <li>
              <input
                type="text"
                id="username"
                onChange={this.update("username")}
                value={this.state.username}
                placeholder="Username"
                style={
                  this.state.username === ""
                    ? { borderColor: "red" }
                    : { borderColor: "#919496" }
                }
                className={dataInputField}
              />
              {this.state.username === "" ? (
                <span className={errorMessage}>Please enter your username</span>
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
                placeholder="Password"
                style={
                  this.state.password === ""
                    ? { borderColor: "red" }
                    : { borderColor: "#919496" }
                }
                className={dataInputField}
              />
              {this.state.password === "" ? (
                <span className={errorMessage}>
                  Please enter your password.
                </span>
              ) : (
                ""
              )}
            </li>
            <li className={loginButtonField}>
              <button className={loginButton}>LOG IN</button>
            </li>
            <li className={linkCaptionField}>
              <hr className={lineDividor} />
              <p className={linkCaption}>Don't have an account?</p>
            </li>
            <li className={loginLinkField}>
              <Link to="/signup" className={loginLink}>
                SIGN UP FOR SOSOFLY
              </Link>
            </li>
          </ul>
        </main>
      </form>
    );
  }
}

export default LoginForm;