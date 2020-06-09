import React from 'react';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { withRouter } from 'react-router-dom';

class PlaylistForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      creator_id: this.props.userId,
    }
    this.update = this.update.bind(this);
    this.create = this.create.bind(this);
  }

  update() {
    return (e) => {
      this.setState({ title: e.currentTarget.value})
    };
  };

  create() {
    return () => {
      this.props.closeModal();
      this.props.createPlaylist(this.state.creatorId, this.state)
      // .then(() => { return this.props.history.push("/playlists/:playlistId")
      // });
    }
  }

  render(){
    let topCancelButton = "top-cancel-button";
    let topCancelIcon = "top-cancel-icon";
    let createPlaylistFormHeader = "create-playlist-form-header";
    let createPlaylistFormMiddleLine = "create-playlist-form-middle-line";
    let inputBox = "input-box";
    let contentSpacing = "content-spacing";
    let playlistFormLabel = "playlist-form-label";
    let playlistFormInput = "playlist-form-input";
    let buttonBox = "button-box";
    let cancelButtonBox = "cancel-button-box";
    let cancelButton = "cancel-button";
    let createButtonBox = "create-button-box";
    let createButton = "create-button";

    
    let ex = <FontAwesomeIcon icon={faTimes} size="3x" />;
    let {closeModal} = this.props;


    return (
      <>
        <button className={topCancelButton} onClick={closeModal}>
          <div className={topCancelIcon}>{ex}</div>
        </button>
        <h1 className={createPlaylistFormHeader}>Create a new playlist</h1>
        <div className={createPlaylistFormMiddleLine}>
          <div className={inputBox}>
            <div className={contentSpacing}>
              <h4 className={playlistFormLabel}>Playlist Name</h4>
              <input
                type="text"
                placeholder="New Playlist"
                onChange={this.update()}
                value={this.state.title}
                className={playlistFormInput}
              />
            </div>
          </div>
        </div>
        <div className={buttonBox}>
          <div className={cancelButtonBox} onClick={closeModal}>
            <button className={cancelButton} onClick={closeModal}>
              CANCEL
            </button>
          </div>
          <div className={createButtonBox}>
            <button className={createButton} onClick={this.create()}>CREATE</button>
          </div>
        </div>
      </>
    );
  };
};

export default withRouter(PlaylistForm);
