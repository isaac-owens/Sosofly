import React from 'react';

import Track from "./track";


class PlaylistShowMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTrack: null,
    }

    this.firstRef = React.createRef();
    this.handleClick = this.handleClick.bind(this);
  }

  // componentDidUpdate(prevProps, prevState){
  //   if (typeof this.refs.length === 'undefined') {
  //     console.log('nope');
  //     return null;
  //   }
  //   console.log(`refs is ${this.refs} and it's length is ${this.refs.length}`);

  //   // //debugger
  //   if(this.state.selectedTrack !== prevState.selectedTrack) {
  //     let track;
  //     switch(this.state.selectedTrack){
  //       case "All That":
  //         console.log(this.refs);
  //         // console.log(ref.current);
  //         track = this.refs.props.track.track_file
  //         //debugger
  //         break;
  //       default:
  //         break;
  //     }
  //     if(track) {
  //       this.player.src = track;
  //       this.player.play();
  //     }
  //   }
  // }

  handleClick() {
    // console.log(this.firstRef.current);
    // this.setState({ selectedTrack: track.title });
    // this.player.src = this.firstRef.current.track.track_url
    // this.playey.play;
  }


  render() {
    let playlistShowContentSpacing = "playlist-show-content-spacing";
    let tracklistContainer = "tracklist-container";
    let tracklist = "tracklist";

    let { playlist } = this.props;
    playlist = playlist || {title: ""};

    return (
      <div className={playlistShowContentSpacing}>
        <section className={tracklistContainer}>
          <ol className={tracklist}>
              {playlist.tracks.map(track => 
                <Track 
                key={track.id} 
                track={track} 
                id={track.title}
                ref={this.firstRef}
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