import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nowPlaying: null,
    }
    this.playTrack = this.playTrack.bind(this);
  }

  
  playTrack() {
    const { setState, playerState } = this.props;
    const trackAudio = document.getElementsByClassName(this.props.track.title);
    // A track is currently playing
    // debugger
    if (!playerState.nowPlaying) { // No track is playing
      setState({ nowPlaying: trackAudio[0] });
      trackAudio[0].play().then(this.setState({nowPlaying: true}));
      // debugger
      return;
    } else if (playerState.nowPlaying === trackAudio[0]) { // Current track is already playing
      // debugger
      trackAudio[0].pause();
      // debugger
    } else { // Another track is playing so this one should stop
      playerState.nowPlaying.pause();
      playerState.nowPlaying.currentTime = 0;
      trackAudio[0].play().then(this.setState({nowPlaying: true}));
    }
    
    debugger
    this.setState({nowPlaying: true})
  }

  render() {
    let trackWrapper = "track-wrapper";
    let tracklistRow = "tracklist-row";
    let tracklistColumnOuter = "tracklist-column-outer";
    let tracklistPPTopAlign = "tracklist-play-pause-top-align";
    let tracklistTopAlign = "tracklist-top-align";
    let musicDiscContainer = "music-disc-container";
    let tracklistNameBox = "tracklist-name-box";
    let tracklistNameWrapper = "tracklist-name-wrapper";
    let tracklistName = "tracklist-name";
    let tracklistNameSub = "tracklist-name-sub";
    let tracklistArtist = "tracklist-artist";
    let dotSeparator = "dot-separator";
    let tracklistAlbum = "tracklist-album";
    let tracklistMore = "tracklist-more";
    let moreEllipsis = "more-ellipsis";
    let tracklistDuration = "tracklist-duration";

    let miniDisc = <FontAwesomeIcon icon={faCompactDisc} size="1x" />;
    let moreButton = <FontAwesomeIcon icon={faEllipsisH} size="1x" />;

    let { track, title } = this.props;
    // track = track || {};
    // title = title || "Title";

    return (
      <div className={trackWrapper}>
        <div></div>
        <li className={tracklistRow}>
          <div className={tracklistColumnOuter}>
            <div className={tracklistPPTopAlign}></div>
            <div className={tracklistTopAlign}>
              <span 
              className={musicDiscContainer} 
              onClick={this.playTrack}>
                {miniDisc}

                <audio
                  src={track.track_file}
                  className={this.props.track.title}
                ></audio>
              </span>
            </div>
          </div>
          <div className={tracklistNameBox}>
            <div className={tracklistNameWrapper}>
              <div className={tracklistName}>{title}</div>
              <audio />
              <div className={tracklistNameSub}>
                <span className={tracklistArtist}>
                  I do not own the rights to these tasty jams.
                </span>
                <span className={dotSeparator}>•</span>
                <span className={tracklistAlbum}>Album Name Here</span>
              </div>
            </div>
          </div>
          <div className={tracklistMore}>
            <div className={tracklistTopAlign}>
              <button className={moreEllipsis}>{moreButton}</button>
            </div>
          </div>
          <div className={tracklistDuration}>
            <span>4:44</span>
          </div>
        </li>
      </div>
    );
  }
}

export default Track;