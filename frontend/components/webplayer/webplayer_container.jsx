import { connect } from 'react-redux';
import Webplayer from './webplayer';
import { openModal, closeModal } from '../../actions/modal_actions';
import React from 'react';
import { Link } from 'react-router-dom'

const mSTP = state => {
  return {
    currentUser: state.entities.users[state.session.id],
    playlists: Object.values(state.entities.playlists),
  };
};

const mDTP = dispatch => {
  return {
    createPlaylistForm: (
      <span
      onClick={() => dispatch(openModal("playlistForm"))}
      className="create-playlist-button-title"
      >
        Create Playlist
      </span>
    ),
    deletePlaylistForm: ( 
      <Link
          to="#"
          className="playlist-title"
          onContextMenu={(e) => {
            e.preventDefault();
            e.type === 'contextmenu' ? 
            dispatch(openModal("deletePlaylist")) : 
            ""
          }}
        >
          playlist
        </Link>
    ),
    fetchUserPlaylists: (userId) => dispatch(fetchUserPlaylists(userId)),
    closeModal: () => dispatch(closeModal()),
    fetchPlaylist: (playlist) => dispatch(fetchPlaylist(playlist)),
  };
};

export default connect (mSTP, mDTP)(Webplayer)