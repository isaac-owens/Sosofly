import React from 'react';

import Track from "./track";


class PlaylistShowMain extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
  }


  render() {
    let playlistShowContentSpacing = "playlist-show-content-spacing";
    let tracklistContainer = "tracklist-container";
    let tracklist = "tracklist";

    let { tracks } = this.props;

    return (
      <div className={playlistShowContentSpacing}>
        <section className={tracklistContainer}>
          <ol className={tracklist}>
              {tracks.map(track => 
                <Track 
                key={track.id} 
                track={track} 
                title={track.title}
                onClick={this.handleClick}/>
              )}
          </ol>
          <audio />
        </section>
      </div>
    )
  }
}

export default PlaylistShowMain;