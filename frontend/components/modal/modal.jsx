import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import PlaylistForm from "../playlist/playlist_form";

function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }

  switch (modal) {
    case "playlistForm":
      modal = <PlaylistForm closeModal={closeModal} />
      break;
  
    default:
      break;
  }

  debugger
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
    modal: state.ui.modal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
