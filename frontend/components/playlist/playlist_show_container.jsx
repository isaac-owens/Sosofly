import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actions as playlistActions } from 'react-jplaylist';
import { actions as playerActions} from 'react-jplayer';

import { fetchPlaylist } from '../../actions/playlist_actions';
import { fetchPlaylistTracks } from '../../actions/track_actions';
import { receiveNowPlaying } from '../../actions/now_playing_actions';

import PlaylistShow from '../webplayer/playlist_show';

const mSTP = state => {
  return {
    tracks: Object.values(state.entities.tracks),
    playlist: Object.values(state.entities.playlist)[0],
    currentUser: state.entities.users[state.session.id],
  }
}

const mDTP = dispatch => {
  return {
    fetchPlaylistTracks: entityId => dispatch(fetchPlaylistTracks(entityId)),
    fetchPlaylist: playlistId => dispatch(fetchPlaylist(playlistId)),
    saveNowPlaying: track => dispatch(receiveNowPlaying(track)),
    play: (id, index) => dispatch(playlistActions.play(id, index)),
    pause: id => dispatch(playerActions.pause(id)),
  }
}

export default withRouter(connect(mSTP, mDTP)(PlaylistShow));