import React from 'react';

import Track from "./track";

class PlaylistShowMain extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let playlistShowContentSpacing = "playlist-show-content-spacing";
    let tracklistContainer = "tracklist-container";
    let tracklist = "tracklist";


    return (
      <div className={playlistShowContentSpacing}>
        <section className={tracklistContainer}>
          <ol className={tracklist}>
            <Track />
          </ol>
        </section>
      </div>
    )
  }
}

export default PlaylistShowMain;