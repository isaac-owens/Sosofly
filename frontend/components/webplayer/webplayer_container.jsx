import { connect } from 'react-redux';
import Webplayer from './webplayer';
import { openModal, closeModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';
import React from 'react';
import { actions as playerActions } from 'react-jplayer';
import { actions as playlistActions } from 'react-jplaylist';

const mSTP = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    playlists: Object.values(state.entities.playlists),
    nowPlaying: state.ui.nowPlaying,
    tracks: Object.values(state.entities.tracks),
    track: state.jPlayers,
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
    fetchUserPlaylists: (userId) => dispatch(fetchUserPlaylists(userId)),
    fetchPlaylist: (playlist) => dispatch(fetchPlaylist(playlist)),
    logout: () => dispatch(logout()),
  };
};

export default connect(mSTP, mDTP)(Webplayer)