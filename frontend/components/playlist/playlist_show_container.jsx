import { connect } from 'react-redux';
import PlaylistShow from '../webplayer/main/playlist_show';
import { fetchUserPlaylists } from '../../actions/playlist_actions';
import { withRouter } from 'react-router-dom';

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

const PlaylistShowContainer =  connect(mSTP, mDTP)(PlaylistShow);
// export default withRouter(PlaylistShowContainer);