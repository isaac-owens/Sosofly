import { connect } from 'react-redux';
import PlaylistShow from '../webplayer/main/playlist_show';
import { fetchPlaylist } from '../../actions/playlist_actions';
import { fetchPlaylistTracks } from '../../actions/track_actions';

const mSTP = state => {
  return {
    tracks: Object.values(state.entities.tracks),
    playlist: state.entities.playlists,
    currentUser: state.entities.users[state.session.id],
  }
}

const mDTP = dispatch => {
  return {
    fetchPlaylistTracks: (entityId) => dispatch(fetchPlaylistTracks(entityId)),
    fetchPlaylist: (playlistId) => dispatch(fetchPlaylist(playlistId)),
  }
}

export default connect(mSTP, mDTP)(PlaylistShow);