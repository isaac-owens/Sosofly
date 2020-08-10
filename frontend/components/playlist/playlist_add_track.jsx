import React from 'react';

class PlaylistAddTrack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
    }
  }

  render() {
    return (
      <div>
        <div className="add-track-modal-header-container">
          <button>x-icon</button>
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