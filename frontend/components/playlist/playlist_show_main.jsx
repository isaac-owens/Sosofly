import React from 'react';
import AudioPlayer from 'react-modular-audio-player';

import Track from "./track";


class PlaylistShowMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
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
    if (!this.state.data) return (<div />)

    debugger
    let track_list = tracks.map(track => {
      return Object.assign({src: "", title: ""}, track);
    })

    return (
      <div className={playlistShowContentSpacing}>
        <section className={tracklistContainer}>
          <AudioPlayer className={tracklist}
            audioFiles={track_list}
              // {tracks.map(track => 
              //   <Track 
              //   key={track.id} 
              //   track={track} 
              //   title={track.title}
              //   onClick={this.handleClick}/>
              // )}
          />
          <audio />
        </section>
      </div>
    )
  }
}

export default PlaylistShowMain;