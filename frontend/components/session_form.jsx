import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import LoginForm from "./login_form";
import SignupForm from "./signup_form";

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
  
  renderError(field) {
    const errors = this.props.errors;
    let index = errors.findIndex((error) => error.includes(field));
    return errors[index];
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


  render() {
    return (
        this.props.formType === "login" ? <LoginForm /> : <SignupForm />
    )
  }
}

export default SessionForm;
