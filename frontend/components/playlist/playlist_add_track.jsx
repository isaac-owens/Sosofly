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
        Add playlist modal!
      </div>
    )
  }
}

export default PlaylistAddTrack;