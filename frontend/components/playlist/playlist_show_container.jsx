import { connect } from 'react-redux';
import PlaylistShow from '../webplayer/main/playlist_show';
import { fetchUserPlaylists } from '../../actions/playlist_actions';

const mSTP = state => {
  return {
    playlists: state.entities.playlists,
    currentUser: state.entities.users[state.session.id],
  }
}

const mDTP = dispatch => {
  return {
    fetchPlaylists: (userId) => dispatch(fetchUserPlaylists(userId)),
  }
}

export default connect(mSTP, mDTP)(PlaylistShow);