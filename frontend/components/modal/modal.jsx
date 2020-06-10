import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { createPlaylist, deletePlaylist } from "../../actions/playlist_actions";
import { connect } from "react-redux";
import PlaylistForm from "../playlist/playlist_form";
import PlaylistDelete from "../playlist/playlist_delete"

function Modal({ modal, closeModal, createPlaylist, userId}) {
  if (!modal) {
    return null;
  }

  switch (modal) {
    case "playlistForm":
      modal = <PlaylistForm 
      closeModal={closeModal}
      createPlaylist={createPlaylist}
      userId={userId}
      />
      break;
    case "deletePlaylist":
      modal = <PlaylistDelete
        closeModal={closeModal}
       />
    default:
      break;
  }

   //debugger
  return (
    <div className="modal-background">
      <div className="modal-child">
        {modal}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userId: state.session.id,
    modal: state.ui.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
    createPlaylist: (userId, playlist) => dispatch(createPlaylist(userId, playlist)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
