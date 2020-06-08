import { connect } from 'react-redux';
import Webplayer from './webplayer';

const mSTP = state => {
  return {
    currentUser: state.entities.users[state.session.id],
  };
};

const mDTP = dispatch => {
  return {
    fetchUserPlaylists: () => dispatch(fetchUserPlaylists()),
  };
};

export default connect (mSTP, mDTP)(Webplayer)