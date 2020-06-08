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
    let loginFormHeader = "login-form-header";
    let loginFormContainer = "login-form-container";
    let loginFormContent = "login-form-content";

    let loginFormTitleContainer = "login-form-title-container";
    let loginFormTitle = "login-form-title";

    let loginFormGithubButtonContainter = "login-form-github-button-container";
    let loginFormGithubButton = "login-form-github-button";

    let formDivider = "form-divider";
    let formDividerLine = "form-divider-line";

    let loginErrorsContainer ="login-errors-container";
    let loginErrors = "login-errors";
    
    let loginErrorMessage = "login-error-message";
    
    let loginFormInputField = "login-form-input-field";
    let dataInputField = "data-input-field";
    let inputs = ["data-input-field", "password-input"];
    inputs = inputs.join(' ');
    let loginButtonContainer = "login-button-container";
    let loginButton = "login-button";

    let loginFormFooter = "login-form-footer";
    let loginSignupButton = "login-signup-button";
    let lineDividor = "line-dividor";
    let linkCaption = "link-caption";



    let sosoflyLogo = <FontAwesomeIcon icon={faCompactDisc} size="2x" />;

    return (
      <div className={loginForm}>
        <header className={loginFormHeader}>
          <Link to="/" className={logoLink}>
            {sosoflyLogo} Sosofly
          </Link>
        </header>
        <div className={loginFormContainer}>
          <div className={loginFormContent}>
          <div className={loginFormTitleContainer}>
            <span className={loginFormTitle}>
              To continue, log in to Sosofly.
            </span>
          </div>
          <div className={loginFormGithubButtonContainter}>
            <button className={loginFormGithubButton}>GITHUB</button>
          </div>
          <span className={formDivider}>
            <hr className={formDividerLine} />
            OR
            <hr className={formDividerLine} />
          </span>

          {this.props.errors.length === 0 ? (
            <></>
          ) : (
            <div className={loginErrorsContainer}>
              <p className={loginErrors}>
                <span>{this.props.errors[0]}</span>
              </p>
            </div>
          )}

          <form onSubmit={this.handleSubmit} className={loginFormInputField}>
                <input
                  type="text"
                  id="username"
                  onChange={this.update("username")}
                  value={this.state.username}
                  placeholder="Username"
                  className={dataInputField}
                />
              <input
                type="password"
                id="password"
                onChange={this.update("password")}
                value={this.state.password}
                placeholder="Password"
                className={inputs}
              />
            <div className={loginButtonContainer}>
              <button className={loginButton}>LOG IN</button>
            </div>
          </form>

          <div className={loginFormFooter}>
            <hr className={lineDividor} />
            <p className={linkCaption}>Don't have an account?</p>
            <Link to="/signup" className={loginSignupButton}>
              SIGN UP FOR SOSOFLY
            </Link>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;