import { connect } from 'react-redux';
import Webplayer from './webplayer';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';

const mSTP = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    playlists: Object.values(state.entities.playlists)
  };
};

const mDTP = dispatch => {
  debugger
  return {
    fetchUserPlaylists: (userId) => dispatch(fetchUserPlaylists(userId)),
    createPlaylistForm: (
      <span
        onClick={() => dispatch(openModal("playlistForm"))}
        className="create-playlist-button-title"
      >
        Create Playlist
      </span>
    ),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect (mSTP, mDTP)(Webplayer)