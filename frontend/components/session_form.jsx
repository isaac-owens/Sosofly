import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    {
      this.props.formType === "login"
        ? (this.state = this.props.user)
        : (this.state = this.props.user);
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateGender = this.updateGender.bind(this);
    this.renderError = this.renderError.bind(this);
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

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(() => {
      return this.props.history.push("/account");
    });
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  renderError(field) {
    const errors = this.props.errors;
    let index = errors.findIndex((error) => error.includes(field));
    return errors[index];
  }

  render() {
    let loginForm = "login-form";
    let signupForm = "signup-form";
    let genderBox = "gender-box";
    let genderBoxRadio = "gender-box-radio";
    let loginErrors = "login-errors";
    let logoLink = "logo-link";
    let loginLink = "login-link";
    let errorMessage = "error-message";

    let sosoflyLogo = <FontAwesomeIcon icon={faCompactDisc} size="2x" />;

    
    return (
      <div>
        <Link to="/">--- Logo Home Link ---</Link>
        {this.props.formType === "login" ? (
          <>
            <form onSubmit={this.handleSubmit} className={loginForm}>
              <div className={logoLink}>
                <h1>
                  <Link to="/" className={logoLink}>
                    {sosoflyLogo} Sosofly
                  </Link>
                </h1>
              </div>
              <hr />
              <div className={loginErrors}>
                <ul>
                  {this.props.errors.map((error, idx) => {
                    return (
                      <li key={idx}>
                        <span>{error}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <ul className={loginForm}>
                <li>
                  <input
                    type="text"
                    id="username"
                    onChange={this.update("username")}
                    value={this.state.username}
                  />
                {
                this.state.username === "" ? <span className={errorMessage}>Please enter your username</span> :
                ""
                }
                </li>
                <li>
                  <input
                    type="password"
                    id="password"
                    onChange={this.update("password")}
                    value={this.state.password}
                  />
                {
                this.state.password === "" ? <span className={errorMessage}>Please enter your password.</span> :
                ""
                }
                </li>
                <li>
                  <button>LOG IN</button>
                </li>
                <li>
                  <hr />
                  <p>Don't have an account?</p>
                </li>
                <li>
                  <Link to="/signup" className={loginLink}>
                    SIGN UP FOR SOSOFLY
                  </Link>
                </li>
              </ul>
            </form>
          </>
        ) : (
          <div>
            <form onSubmit={this.handleSubmit} className={signupForm}>
              <header className={logoLink}>
                <h1>
                  <Link to="/" className={logoLink}>
                    {sosoflyLogo} Sosofly
                  </Link>
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
                  {
                  this.state.confirmEmail !== this.state.email ? 
                  <span className={errorMessage}>This email does not match</span> :
                  ""
                  }
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
