import { connect } from 'react-redux';
import Account from './account';
import  { logout, receiveCurrentUser } from '../actions/session_actions';

const mSTP = state => {
  return {
    currentUser: state.entities.users[state.session.id]
  };
};

const mDTP = dispatch => {
  return {
    receiveCurrentUser: user => receiveCurrentUser(user),
    logout: () => dispatch(logout())
  };
};

export default connect(mSTP, mDTP)(Account);