import { connect } from 'react-redux';
import Webplayer from './webplayer';
import { openModal, closeModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import React from 'react';

const mSTP = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    playlists: Object.values(state.entities.playlists),
    nowPlaying: state.ui.nowPlaying,
  };
};

const mDTP = dispatch => {
  return {
    createPlaylistForm:
      <span
      onClick={() => dispatch(openModal("playlistForm"))}
      className="create-playlist-button-title"
      >
        Create Playlist
      </span>,
      
    deletePlaylistForm: () => dispatch(openModal("deletePlaylist")),
    addTrackModal: () => dispatch(openModal("addPlaylistTrack")),
    fetchUserPlaylists: (userId) => dispatch(fetchUserPlaylists(userId)),
    closeModal: () => dispatch(closeModal()),
    fetchPlaylist: (playlist) => dispatch(fetchPlaylist(playlist)),
    logout: () => dispatch(logout()) 
  };
};

export default connect(mSTP, mDTP)(Webplayer)