import React from 'react';
import AudioPlayer from 'react-modular-audio-player';

import Track from "./track";
import { faBoxTissue } from '@fortawesome/free-solid-svg-icons';


class PlaylistShowMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      nowPlaying: false
    }
    this.loadData = this.loadData.bind(this);
  }


  componentDidMount() {
    this.loadData();
  }

  loadData() {
    this.setState({data: this.props.fetchPlaylistTracks(this.props.id)});
  }

  render() {
    let playlistShowContentSpacing = "playlist-show-content-spacing";
    let tracklistContainer = "tracklist-container";
    // let tracklist = "tracklist";

    let { tracks } = this.props;

    if (!this.state.data || tracks.length === 0) {
      return (<div />);
    } else {

      return (
        <div className={playlistShowContentSpacing}>
          <section className={tracklistContainer}>
            <ol>
              {/* return <AudioPlayer
              key={track.id}
              // className={tracklist}
              audioFiles={[{src: track.track_file, title: track.title}]}
              fontColor="#fff"
              fontSize="16px"
              playerWidth="100%"
              <audio /> */}
          {tracks.map(track => {
             return <Track
              key={track.id}
              track={track}
              title={track.title}
              setState={(state, callback) => this.setState(state, callback)}
              playerState={this.state}
              />
          })}
            </ol>
          </section>
        </div>
      );
    }
  }
}

export default PlaylistShowMain;