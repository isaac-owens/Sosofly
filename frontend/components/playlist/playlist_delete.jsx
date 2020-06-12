import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";


class PlaylistDelete extends React.Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete(){
    this.props.deletePlaylist(this.props.userId, this.props.playlistId)
    this.props.closeModal();
  }

  

  render() {
    let topCancelButton = "top-cancel-button";
    let topCancelIcon = "top-cancel-icon";
    let createPlaylistFormHeader = "create-playlist-form-header";
    let buttonBox = "button-box";
    let cancelButtonBox = "cancel-button-box";
    let cancelButton = "cancel-button";
    let createButtonBox = "create-button-box";
    let createButton = "create-button";

    let ex = <FontAwesomeIcon icon={faTimes} size="3x" />;
    let { closeModal } = this.props;

    return (
      <>
        <button className={topCancelButton} onClick={closeModal}>
          <div className={topCancelIcon}>{ex}</div>
        </button>
        <h1 className={createPlaylistFormHeader}>
          Do you really want to delete this playlist?
        </h1>
        <div className={buttonBox}>
          <div className={cancelButtonBox}>
            <button className={cancelButton} onClick={closeModal}>
              CANCEL
            </button>
          </div>
          <div className={createButtonBox}>
            {/* this button somehow needs to get the currentUser/playlist id */}
            <button className={createButton} onClick={() => this.delete}>
              DELETE
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default (PlaylistDelete);