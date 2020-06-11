import { connect } from 'react-redux';
import { fetchPlaylist } from '../../actions/playlist_actions';
import { fetchPlaylistTracks } from '../../actions/track_actions';

import PlaylistShow from '../webplayer/playlist_show';

const mSTP = state => {
  return {
    tracks: Object.values(state.entities.tracks),
    playlist: state.entities.playlist,
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