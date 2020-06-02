import { connect } from "react-redux";
import { signup } from "../actions/session_actions";

import SessionForm from "./session_form";

const mapStateToProps = (state) => {
  return {
    user: {
      email: '', 
      password: '',
      username: '',
      birthdate: '',
      gender: '',
     },
    errors: state.errors.session,
    formType: "signup",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    processForm: (user) => {
      return dispatch(signup(user));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
