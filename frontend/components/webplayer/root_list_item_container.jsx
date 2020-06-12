import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import RootListItem from './root_list_item';

const mSTP = state => {
  currentUser: state.entitites.users[state.session.id]
}

const mDTP = dispatch => {
  return {
    deletePlaylist: (userId, playlistId) => dispatch(deletePlaylist(userId, playlistId)),
    openModal: () => dispatch(openModal("deletePlaylist"))
  }
}

export default connect(mSTP, mDTP)(RootListItem)