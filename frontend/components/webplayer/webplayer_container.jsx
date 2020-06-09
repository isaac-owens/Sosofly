import { connect } from 'react-redux';
import Webplayer from './webplayer';
import { openModal, closeModal } from '../../actions/modal_actions';
import PlaylistForm from '../playlist/playlist.form';

const mSTP = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    playlists: Object.values(state.entities.playlists)
  };
};

const mDTP = dispatch => {
  return {
    fetchUserPlaylists: (userId) => dispatch(fetchUserPlaylists(userId)),
    createPlaylistForm: (
      <button onClick={() => dispatch(openModal(<PlaylistForm />))}>
        Create Playlist
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect (mSTP, mDTP)(Webplayer)