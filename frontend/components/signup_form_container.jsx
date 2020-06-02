import { connect } from "react-redux";
import { signup } from "../actions/session_actions";

import SessionForm from "./session_form";

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: ownProps.currentUser,
    errors: state.errors.session,
    formType: "signup",
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    processForm: (user) => {
      return dispatch(signup(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
