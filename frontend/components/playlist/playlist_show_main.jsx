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

    let { playlist } = this.props;

    return (
      <div className={playlistShowContentSpacing}>
        <section className={tracklistContainer}>
          <ol className={tracklist}>
            {playlist.tracks.map(track => {
              return <Track key={track.id} track={track} />
            })}
          </ol>
        </section>
      </div>
    )
  }
}

export default PlaylistShowMain;