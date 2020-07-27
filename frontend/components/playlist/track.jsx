import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { fetchArtist } from '../../actions/artist_actions';

class Track extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nowPlaying: false,
    }
    this.playTrack = this.playTrack.bind(this);
    this.stopAllSongs = this.stopAllSongs.bind(this);
  }

  stopAllSongs(track) {
    for(const audio of document.querySelectorAll('audio')) {
      if(audio !== track) {
        audio.pause();
        audio.currentTime = 0;
        this.props.setState({ nowPlaying: null })
      }
    }
  }
  
  playTrack() {
    const { track, setState, playerState, saveNowPlaying } = this.props;
    const trackAudio = document.getElementsByClassName(this.props.track.title);
    if (!playerState.nowPlaying) { // No track is playing
      setState({ nowPlaying: trackAudio[0] });
      trackAudio[0].play().then(this.setState({nowPlaying: true})); // Play this track
      saveNowPlaying(track)
    } else if (playerState.nowPlaying === trackAudio[0]) { // Current track is playing or paused 
      if (trackAudio[0].paused) {
        trackAudio[0].play()
        this.setState({ nowPlaying: true })
      } else {
        trackAudio[0].pause();
        this.setState({ nowPlaying: false })
      }
    } else { // Another track is playing so this it should stop and this one should start
      this.stopAllSongs(trackAudio[0]);
      trackAudio[0].play().then(this.setState({nowPlaying: true}));
      saveNowPlaying(track)
    }
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
    let play = <FontAwesomeIcon icon={faPlayCircle} size="1x" />;

    let { track, title } = this.props;

    return (
      <div className={trackWrapper}>
        <div></div>
        <li className={tracklistRow}>
          <div className={tracklistColumnOuter}>
            <div className={tracklistPPTopAlign}></div>
            <div className={tracklistTopAlign}>
              <span className={musicDiscContainer} onClick={this.playTrack}>
                {!this.state.nowPlaying ? play : miniDisc}

                <audio
                  src={track.track_file}
                  className={track.title}
                ></audio>
              </span>
            </div>
          </div>
          <div className={tracklistNameBox}>
            <div className={tracklistNameWrapper}>
              <div className={tracklistName}>{title}</div>
              <audio />
              <div className={tracklistNameSub}>
                <span 
                className={tracklistArtist}
                onClick={() => this.props.getArtist(track.artist_id)}>
                  <Link to={`/webplayer/artist/${track.artist_id}`}>{track.artist}</Link>
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

const mDTP = dispatch => {
  return {
    getArtist: artistId => dispatch(fetchArtist(artistId)),
  }
}

export default connect(null, mDTP)(Track)