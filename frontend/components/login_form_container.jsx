import { connect } from "react-redux";

import { login, clearErrors } from "../actions/session_actions";
import LoginForm from "./login_form";

const mapStateToProps = (state) => {
  return {
    user: {username: '', password: ''},
    errors: state.errors.session,
    formType: "login",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
