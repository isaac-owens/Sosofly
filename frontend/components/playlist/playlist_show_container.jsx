import { connect } from 'react-redux';
import PlaylistShow from '../webplayer/main/playlist_show';
import { fetchUserPlaylists } from '../../actions/playlist_actions';

const mSTP = state => {
  return {
    tracks: state.entities.tracks,
    currentUser: state.entities.users[state.session.id],
  }
}

const mDTP = dispatch => {
  return {
    fetchPlaylistTracks: (entityId) => dispatch(fetchUserPlaylists(entityId)),
  }
}

export default connect(mSTP, mDTP)(PlaylistShow);