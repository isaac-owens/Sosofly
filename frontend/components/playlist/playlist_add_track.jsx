import React from 'react';
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class PlaylistAddTrack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    }
  }

  render() {
    let { closeModal } = this.props;
    let ex = <FontAwesomeIcon icon={faTimes} size="3x" />;

    return (
      <>
        <button className="top-cancel-button" onClick={closeModal}>
          <div className="top-cancel-icon">{ex}</div>
        </button>
        <div className="add-track-modal-header">
          <h1 className="add-track-modal-header-message">Add to playlist</h1>
        </div>
        <button className="new-playlist-button">NEW PLAYLIST</button>
        <div className="playlist-grid">
          <div className="playlist-grid-item">
            <div className="playlist-grid-item-hover">
              <div className="playlist-grid-item-cover-art"></div>
            </div>
          </div>
          <div className="playlist-grid-item">
            <div className="playlist-grid-item-hover">
              <div className="playlist-grid-item-cover-art"></div>
            </div>
          </div>
          <div className="playlist-grid-item">
            <div className="playlist-grid-item-hover">
              <div className="playlist-grid-item-cover-art"></div>
            </div>
          </div>
          <div className="playlist-grid-item">
            <div className="playlist-grid-item-hover">
              <div className="playlist-grid-item-cover-art"></div>
            </div>
          </div>
          <div className="playlist-grid-item">
            <div className="playlist-grid-item-hover">
              <div className="playlist-grid-item-cover-art"></div>
            </div>
          </div>
          <div className="playlist-grid-item">
            <div className="playlist-grid-item-hover">
              <div className="playlist-grid-item-cover-art"></div>
            </div>
          </div>
          <div className="playlist-grid-item">
            <div className="playlist-grid-item-hover">
              <div className="playlist-grid-item-cover-art"></div>
            </div>
          </div>
          <div className="playlist-grid-item">
            <div className="playlist-grid-item-hover">
              <div className="playlist-grid-item-cover-art"></div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default PlaylistAddTrack;