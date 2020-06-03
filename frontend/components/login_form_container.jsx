import { connect } from "react-redux";

import { login, clearErrors } from "../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = (state, ownProps) => {
  return {
    user: {username: '', password: ''},
    errors: state.errors.session,
    formType: "login",
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
