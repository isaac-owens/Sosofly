import React from 'react';
import Track from '../../components/playlist/track';

class AlbumShowMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      nowPlaying: false
    }
  }

  componentDidMount() {
    this.props.fetchAlbumTracks(this.props.id)
  }

  render () {
    let playlistShowContentSpacing = "playlist-show-content-spacing";
    let tracklistContainer = "tracklist-container";
    
    let { tracks } = this.props;

    if(!tracks) {
      return <div></div>
    } else {
      return(
        <div className={playlistShowContentSpacing}>
          <section className={tracklistContainer}>
            <ol>
              {tracks.map(track => {
                return <Track
                  key={track.id}
                  track={track}
                  title={track.title}
                  setState={(state, callback) => this.setState(state, callback)}
                  playerState={this.state}
                  // saveNowPlaying={saveNowPlaying}
                />
              })}
            </ol>
          </section>
        </div>
      )
    }
  }
}

export default AlbumShowMain;