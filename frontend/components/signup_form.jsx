import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateGender = this.updateGender.bind(this);
    this.renderError = this.renderError.bind(this);
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
    };
  }

  updateGender() {
    return (e) => {
      this.setState({ gender: e.target.value });
    };
  }

  renderError(field) {
    const errors = this.props.errors;
    let index = errors.findIndex((error) => error.includes(field));
    return errors[index];
  }

  render() {
    let signupLogoLink = "signup-logo-link";

    let signupFormMain = "signup-form-main";
    let signupFormHeader = "signup-form-header";
    let signupFormHeaderMessage = "signup-form-header-message";

    let signupFormGithubButtonContainter = "signup-form-github-button-container";
    let signupFormGithubButton = "signup-form-github-button";
    let formDivider = "form-divider";
    let formDividerLine = "form-divider-line";

    let signupForm = "signup-form";
    let signupFormTitle = "signup-form-title";

    let genderBox = "gender-box";
    let genderBoxRadio = "gender-box-radio";
    let signupLoginLink = "signup-login-link";
    let errorMessage = "error-message";

    let sosoflyLogo = <FontAwesomeIcon icon={faCompactDisc} size="2x" />;

    return (
      <div>
        <div onSubmit={this.handleSubmit} className={signupFormMain}>
          <header className={signupFormHeader}>
            <div>
              <Link to="/" className={signupLogoLink}>
                {sosoflyLogo} Sosofly
              </Link>
            </div>
            <h2 className={signupFormHeaderMessage}>
              Sign up to start listening.
            </h2>
          </header>
          <div className={signupFormGithubButtonContainter}>
            <button className={signupFormGithubButton}>GITHUB</button>
          </div>
          <span class={formDivider}>
            <hr className={formDividerLine} />
            or
            <hr className={formDividerLine} />
          </span>
          <form className={signupForm}>
            <h2 class={signupFormTitle}>Sign up with your email address</h2>
            <ul>
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
                <span className={errorMessage}>
                  {this.renderError("Email")}
                </span>
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
                {this.state.confirmEmail !== this.state.email ? (
                  <span className={errorMessage}>
                    This email does not match
                  </span>
                ) : (
                  ""
                )}
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
                <span className={errorMessage}>
                  {this.renderError("Password")}
                </span>
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
                <span className={errorMessage}>
                  {this.renderError("Username")}
                </span>
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
                <span className={errorMessage}>
                  {this.renderError("Birthdate")}
                </span>
              </li>
              <li>
                <p>What's your gender?</p>
                <div className={genderBox}>
                  <div className={genderBoxRadio}>
                    <input
                      type="radio"
                      id="male"
                      checked={this.state.gender === "male"}
                      onChange={this.updateGender()}
                      value="male"
                    />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div className={genderBoxRadio}>
                    <input
                      type="radio"
                      id="female"
                      checked={this.state.gender === "female"}
                      onChange={this.updateGender()}
                      value="female"
                    />
                    <label htmlFor="female">Female</label>
                  </div>
                  <div className={genderBoxRadio}>
                    <input
                      type="radio"
                      id="non-binary"
                      checked={this.state.gender === "non-binary"}
                      onChange={this.updateGender()}
                      value="non-binary"
                    />
                    <label htmlFor="non-binary">Non-Binary</label>
                  </div>
                </div>
                <span className={errorMessage}>
                  {this.renderError("Gender")}
                </span>
              </li>
              <li>
                <button>SIGN UP</button>
              </li>
              <li>
                <p>
                  Have an account?{" "}
                  <Link to="/login" className={signupLoginLink}>
                    Log in.
                  </Link>
                </p>
              </li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
}

export default SignupForm;
