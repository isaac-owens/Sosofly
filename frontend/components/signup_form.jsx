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

    let signupFormInputField = "signup-form-input-field";
    let signupFormLabelContainer = "signup-form-label-container";
    let signupFormLabel = "signup-form-label";
    let signupFormInput = "signup-form-input";
    let signupFormHelpText = "signup-form-help-text";

    let signupFormGenderSelect = "signup-form-gender-select";
    let genderBoxRadio = "gender-box-radio";
    let genderBoxRadioLabel = "gender-box-radio-label";
    let errorMessage = "error-message";
    
    let signupFormFooter = "signup-form-footer";
    let signupButtonContainer = "signup-button-container";
    let signupButton = "signup-button";
    let signupLoginLink = "signup-login-link";
    let signupLoginLinkMessage = "signup-login-link-message";

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
            <div className={signupFormInputField}>
              <div className={signupFormLabelContainer}>
                <label htmlFor="email" className={signupFormLabel}>
                  What's your email?
                </label>
              </div>
              <input
                type="text"
                id="email"
                placeholder="Enter your email."
                onChange={this.update("email")}
                value={this.state.email}
                className={signupFormInput}
              />
              <span className={errorMessage}>{this.renderError("Email")}</span>
            </div>
            <div className={signupFormInputField}>
              <div className={signupFormLabelContainer}>
                <label htmlFor="confirmEmail" className={signupFormLabel}>
                  Confirm your email
                </label>
              </div>
                  <input
                    type="text"
                    id="confirmEmail"
                    placeholder="Enter your email again."
                    onChange={this.update("confirmEmail")}
                    value={this.state.confirmEmail}
                    className={signupFormInput}
                  />
              {this.state.confirmEmail !== this.state.email ? (
                <span className={errorMessage}>This email does not match</span>
              ) : (
                ""
              )}
            </div>
            <div className={signupFormInputField}>
              <div className={signupFormLabelContainer}>
                <label htmlFor="password" className={signupFormLabel}>
                  Create a password
                </label>
              </div>
                  <input
                    type="password"
                    id="password"
                    placeholder="Create a password."
                    onChange={this.update("password")}
                    value={this.state.password}
                    className={signupFormInput}
                  />
              <span className={errorMessage}>
                {this.renderError("Password")}
              </span>
            </div>
            <div className={signupFormInputField}>
              <div className={signupFormLabelContainer}>
                <label htmlFor="username" className={signupFormLabel}>
                  What should we call you?
                </label>
              </div>
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter a profile name."
                    onChange={this.update("username")}
                    value={this.state.username}
                    className={signupFormInput}
                  />
              <div class={signupFormHelpText}>This appears on your profile.</div>
              <span className={errorMessage}>
                {this.renderError("Username")}
              </span>
            </div>
            <div className={signupFormInputField}>
              <div className={signupFormLabelContainer}>
                <label htmlFor="birthdate" className={signupFormLabel}>
                  What's your date of birth?
                </label>
              </div>
                  <input
                    type="date"
                    id="birthdate"
                    onChange={this.update("birthdate")}
                    value={this.state.birthdate}
                    className={signupFormInput}
                  />
              <span className={errorMessage}>
                {this.renderError("Birthdate")}
              </span>
            </div>
            <div className={signupFormInputField}>
              <div className={signupFormLabelContainer}>
                <label className={signupFormLabel}>What's your gender?</label>
              </div>
              <div className={signupFormGenderSelect}>
                <label className={genderBoxRadio}>
                  <input
                    type="radio"
                    id="male"
                    checked={this.state.gender === "male"}
                    onChange={this.updateGender()}
                    value="male"
                  />
                  <span class={genderBoxRadioLabel}>Male</span>
                </label>
                <label className={genderBoxRadio}>
                  <input
                    type="radio"
                    id="female"
                    checked={this.state.gender === "female"}
                    onChange={this.updateGender()}
                    value="female"
                  />
                  <span class={genderBoxRadioLabel}>Female</span>
                </label>
                <label className={genderBoxRadio}>
                  <input
                    type="radio"
                    id="non-binary"
                    checked={this.state.gender === "non-binary"}
                    onChange={this.updateGender()}
                    value="non-binary"
                  />
                  <span class={genderBoxRadioLabel}>Non-binary</span>
                </label>
              </div>
              <span className={errorMessage}>{this.renderError("Gender")}</span>
            </div>
            <div className={signupFormFooter}>
              <p className={signupLoginLinkMessage}>
                <span>
                  Have an account?
                  <Link to="/login" className={signupLoginLink}>
                    Log in
                  </Link>.
                </span>
              </p>
              <div className={signupButtonContainer}>
                <button className={signupButton}>SIGN UP</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignupForm;
