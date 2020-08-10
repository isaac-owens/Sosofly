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
    let ex = <FontAwesomeIcon icon={faTimes} size="3x" />;

    return (
      <div>
        
        <div className="add-track-modal-header-container">
          <button className={topCancelButton} onClick={closeModal}>
            <div className={topCancelIcon}>{ex}</div>
          </button>
          <div className="add-track-modal-header">
            <h1 className="add-track-modal-header-message">Add to playlist</h1>
          </div>
        </div>
        <div></div>
      </div>
    )
  }
}

export default PlaylistAddTrack;