import { connect } from "react-redux";
import { signup, clearErrors } from "../actions/session_actions";

import SignupForm from "./signup_form";

const mapStateToProps = (state) => {
  return {
    user: {
      email: '', 
      confirmEmail: '',
      password: '',
      confirmEmail: '',
      username: '',
      birthdate: '',
      month: '',
      day: '',
      year: '',
      gender: '',
    },
    errors: state.errors.session,
    formType: "signup",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
