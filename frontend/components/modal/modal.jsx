import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { 
  createPlaylist,
  deletePlaylist,
  addTrackToPlaylist,
} from "../../actions/playlist_actions";
import { connect } from "react-redux";
import PlaylistForm from "../playlist/playlist_form";
import PlaylistDelete from "../playlist/playlist_delete";
import PlaylistAddTrack from "../playlist/playlist_add_track";

function Modal({ 
  closeModal, 
  deletePlaylist,
  createPlaylist,
  addTrackToPlaylist, 
  modal, 
  userId,
  playlistId}) {
  if (!modal) {
    return null;
  }

  switch (modal) {
    case "playlistForm":
      modal =  <PlaylistForm 
      closeModal={closeModal}
      createPlaylist={createPlaylist}
      userId={userId}
      />
      break;
    case "deletePlaylist":
      modal =  <PlaylistDelete
        deletePlaylist={deletePlaylist}
        closeModal={closeModal}
        playlistId={playlistId}
        userId={userId}
       />
    default:
      break;
    case "addPlaylistTrack":
      modal = <PlaylistAddTrack 
        closeModal={closeModal}
        userId={userId}
        addTrackToPlaylist={addTrackToPlaylist}
      />
  }

  return (
    <div className="modal-background">
      <div className="modal-child">
        {modal}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  
  if (!state.ui.modal) {
    return {
      userId: state.session.id,
      modal: state.ui.modal,
    } 
  } else {
      return {
        userId: state.session.id,
        modal: state.ui.modal,
        playlistId: state.ui.playlistId
    }
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    createPlaylist: (userId, playlist) => dispatch(createPlaylist(userId, playlist)),
    deletePlaylist: (userId, playlistId) => dispatch(deletePlaylist(userId, playlistId)),
    addTrackToPlaylist: (playlist, track) => dispatch(addTrackToPlaylist(playlist,track)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
