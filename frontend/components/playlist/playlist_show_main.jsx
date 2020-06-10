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


  componentDidMount(){
    let test = this.firstRef.current;
    console.log(test);
  }

  componentDidUpdate(prevProps, prevState){
    if (typeof this.refs.length === 'undefined') {
      console.log('nope');
      return null;
    }
    console.log(`refs is ${this.refs} and it's length is ${this.refs.length}`);

    // //debugger
    if(this.state.selectedTrack !== prevState.selectedTrack) {
      let track;
      switch(this.state.selectedTrack){
        case "All That":
          console.log(this.refs);
          // console.log(ref.current);
          track = this.refs.track.track_file
          //debugger
          break;
        default:
          break;
      }
      if(track) {
        this.player.src = track;
        this.player.play();
      }
    }
  }

  handleClick(track) {
    this.setState({ selectedTrack: track.title });
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
          <audio ref={ref => this.player = ref} />
        </section>
      </div>
    )
  }
}

export default PlaylistShowMain;