import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc, faThList } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

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
    const date = `${this.state.year}-${this.state.month}-${this.state.day}`
    // debugger
    const user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      birthdate: date,
      gender: this.state.gender
    }
    // if (this.state.email !== this.state.confirmEmail) {
    //   // debugger
    //   console.log("Does not match!")
    //   this.renderError("Email");
    //   return;
    // }

    this.props.processForm(user).then(() => {
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

  updateMonth() {
    return (e) => {
      e.stopPropagation();
      let target = e.target.value;
      this.setState((state) => ({ birthdate: target }));
    };
  }
  updateDay() {
    return (e) => {
      e.stopPropagation();
      let target = e.target.value;
      this.setState((state) => ({ birthdate: target }));
    };
  }
  updateYear() {
    return (e) => {
      e.stopPropagation();
      let target = e.target.value;
      this.setState((state) => ({ birthdate: target }));
    };
  }
  
  renderError(field) {
    // debugger
    const errors = this.props.errors;
    return errors.some(error => error.includes(field))
  }
  
  
  toggleClass() {
    return (e) => {
      e.currentTarget.className="hidden";
    }
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
    let errorMessage = "error-message";
    
    let signupFormDateSelect = "signup-form-date-select";
    let signupFormMonthSelect = "signup-form-month-select";
    let monthWrapper = "month-wrapper";
    let selectContainer = "select-container";
    let dayWrapper = "day-wrapper";
    let yearWrapper = "year-wrapper";
    let selectArrow = "select-arrow";
    
    let signupFormGenderSelect = "signup-form-gender-select";
    let genderBoxRadio = "gender-box-radio";
    let genderBoxRadioLabel = "gender-box-radio-label";
    let signupFormFooter = "signup-form-footer";
    let signupButtonContainer = "signup-button-container";
    let signupButton = "signup-button";
    let signupLoginLink = "signup-login-link";
    let signupLoginLinkMessage = "signup-login-link-message";
    
    let sosoflyLogo = <FontAwesomeIcon icon={faCompactDisc} size="2x" />;
    let arrowDown = <FontAwesomeIcon icon={faChevronDown} size="1x" />;
    let exclamation = <FontAwesomeIcon icon={faExclamationCircle} size="1x" />;
    
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
          <span className={formDivider}>
            <hr className={formDividerLine} />
            or
            <hr className={formDividerLine} />
          </span>
          <form className={signupForm}>
            <h2 className={signupFormTitle}>Sign up with your email address</h2>
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
              {this.renderError("Email") ? (
                <div className={errorMessage}>
                  {exclamation} Email cannot be blank
                </div>
              ) : (
                ""
              )}
            </div>
            <div className={signupFormInputField}>
              <div className={signupFormLabelContainer}>
                <label className={signupFormLabel}>Confirm your email</label>
              </div>
              <input
                type="text"
                placeholder="Enter your email again."
                onChange={this.update("confirmEmail")}
                value={this.state.confirmEmail}
                className={signupFormInput}
              />
              
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
              {this.renderError("Password") ? (
                <div className={errorMessage}>
                  {exclamation} Password min 6 characters
                </div>
              ) : (
                ""
              )}
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
              <div className={signupFormHelpText}>
                This appears on your profile.
              </div>
              {this.renderError("Username") ? (
                <div className={errorMessage}>
                  {exclamation} Username cannot be blank
                </div>
              ) : (
                ""
              )}
            </div>
            <div className={signupFormInputField}>
              <div className={signupFormLabelContainer}>
                <label htmlFor="birthdate" className={signupFormLabel}>
                  What's your date of birth?
                </label>
              </div>
              <div className={signupFormDateSelect}>
                <div className={monthWrapper}>
                  <div className={signupFormLabelContainer}>
                    <label htmlFor="month" className={signupFormLabel}>
                      Month
                    </label>
                  </div>
                  <div className={selectContainer}>
                    <select
                      name="month"
                      id="month"
                      onChange={this.update("month")}
                      className={signupFormMonthSelect}
                    >
                      <option disabled defaultValue="selected" value="">
                        Month
                      </option>
                      <option value="01">January</option>
                      <option value="02">February</option>
                      <option value="03">March</option>
                      <option value="04">April</option>
                      <option value="05">May</option>
                      <option value="06">June</option>
                      <option value="07">July</option>
                      <option value="08">August</option>
                      <option value="09">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>
                    <div className={selectArrow}>{arrowDown}</div>
                  </div>
                </div>
                <div className={dayWrapper}>
                  <div className={signupFormLabelContainer}>
                    <label htmlFor="day" className={signupFormLabel}>
                      Day
                    </label>
                  </div>
                  <input
                    type="text"
                    placeholder="DD"
                    inputMode="numeric"
                    maxLength="2"
                    pattern="((0?[1-9])|([12][0-9])|(3[01]))"
                    required
                    className={signupFormInput}
                    onChange={this.update("day")}
                    value={this.state.day}
                  />
                </div>
                <div className={yearWrapper}>
                  <div className={signupFormLabelContainer}>
                    <label htmlFor="day" className={signupFormLabel}>
                      Year
                    </label>
                  </div>
                  <div className={selectContainer}>
                    <input
                      type="text"
                      inputMode="numeric"
                      maxLength="4"
                      pattern="(19[0-9]{2})|(200)[0-7]"
                      placeholder="YYYY"
                      required
                      className={signupFormInput}
                      onChange={this.update("year")}
                      value={this.state.year}
                    />
                  </div>
                </div>
              </div>
              {this.renderError("Birthdate") ? 
                <div className={errorMessage}>
                  {exclamation} Birthdate cannot be blank
                </div> : 
                ""}
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
                  <span className={genderBoxRadioLabel}>Male</span>
                </label>
                <label className={genderBoxRadio}>
                  <input
                    type="radio"
                    id="female"
                    checked={this.state.gender === "female"}
                    onChange={this.updateGender()}
                    value="female"
                  />
                  <span className={genderBoxRadioLabel}>Female</span>
                </label>
                <label className={genderBoxRadio}>
                  <input
                    type="radio"
                    id="non-binary"
                    checked={this.state.gender === "non-binary"}
                    onChange={this.updateGender()}
                    value="non-binary"
                  />
                  <span className={genderBoxRadioLabel}>Non-binary</span>
                </label>
              </div>
              {this.renderError("Gender") ? 
                <div className={errorMessage}>
                  {exclamation} Gender cannot be blank
                </div> : 
                ""}
            </div>
            <div className={signupFormFooter}>
              <div className={signupButtonContainer}>
                <button className={signupButton}>SIGN UP</button>
              </div>
              <p className={signupLoginLinkMessage}>
                <span>
                  Have an account?
                  <Link to="/login" className={signupLoginLink}>
                    Log in
                  </Link>
                  .
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignupForm;
