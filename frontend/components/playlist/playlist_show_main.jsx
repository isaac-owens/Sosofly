import React from 'react';
import AudioPlayer from 'react-modular-audio-player';

import Track from "./track";


class PlaylistShowMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    }
    
    this.handleClick = this.handleClick.bind(this);
    this.loadData = this.loadData.bind(this);
  }

  handleClick() {
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
    let tracklist = "tracklist";

    let { tracks } = this.props;

    if (!this.state.data || tracks.length === 0) {
      return (<div />);
    } else {

      return (
        <div className={playlistShowContentSpacing}>
          <section className={tracklistContainer}>
            <ol>
            {tracks.map(track => {
              return <AudioPlayer
              key={track.id}
              // className={tracklist}
              audioFiles={[{src: track.track_file, title: track.title}]}
              fontColor="#fff"
              fontSize="16px"
              playerWidth="100%"
            /> })}
            </ol>
              {/* //   <Track */}
              {/* //   key={track.id}
              //   track={track}
              //   title={track.title}
              //   onClick={this.handleClick}/>
              // )} */}
            <audio />
          </section>
        </div>
      );
    }
  }
}

export default PlaylistShowMain;