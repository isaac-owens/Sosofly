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
    debugger
    this.props.processForm(this.state)
    .then(() => {
      return this.props.history.push("/account");
    });
  }

  render() {
    return (
      <>
        <ul>
          {this.props.errors.map((error, idx) => {
            return <li key={idx}>{error}</li>;
          })}
        </ul>

        <Link to="/">--- Logo Home Link ---</Link>
        {this.props.formType === "login" ? (
          <div>
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
            <button>LOG IN</button>
            </form>
            <p>Don't have an account?</p>
            <Link to="/signup">SIGN UP FOR SPOTIFY</Link>
          </div>
        ) : (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="email">What's your email?
                <input
                  type="text"
                  id="email"
                  onChange={this.update("email")}
                  value={this.state.email}
                />
              </label>
              <label htmlFor="confirmEmail">Confirm your email 
                <input
                  type="text"
                  id="confirmEmail"
                  onChange={this.update("confirmEmail")}
                  value={this.state.confirmEmail}
                />
              </label>
              <label htmlFor="password">Create a password 
                <input
                  type="password"
                  id="password"
                  onChange={this.update("password")}
                  value={this.state.password}
                />
                <label htmlFor="username">What should we call you? 
                  <input
                    type="text"
                    id="username"
                    onChange={this.update("username")}
                    value={this.state.username}
                  />
                </label>
                <p>This appears on your profile.</p>
              </label>
              <label htmlFor="birthdate">What's your date of birth?
                <input
                  type="date"
                  id="birthdate"
                  onChange={this.update("birthdate")}
                  value={this.state.birthdate}
                />
              </label>
              <p>What's your gender?</p>
              <label htmlFor="male">Male
                <input
                  type="radio"
                  id="male"
                  onChange={this.update("gender")}
                  value="male"
                />
              </label>
              <label htmlFor="female">Female
                <input
                  type="radio"
                  id="female"
                  onChange={this.update("gender")}
                  value="female"
                />
              </label>
              <label htmlFor="non-binary">Non-Binary
                <input
                  type="radio"
                  id="non-binary"
                  onChange={this.update("gender")}
                  value="non-binary"
                />
              </label>
            <button>SIGN UP</button>
            </form>
            <p>Have an account? <Link to="/login">Log in.</Link></p>
          </div>
        )}
      </>
    );
  }
}




          {/* {this.props.formType === "login" ? (
            ) : (
              <button>SIGN UP</button>
              )}
        </form>

        {this.props.formType === "login" ? (
          <>
<Link to="/login">Login</Link>
          </>
        ) : (
        )}
      </> */}


export default SessionForm;
