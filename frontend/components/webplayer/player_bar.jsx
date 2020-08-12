import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";   

import JPlayer, { Gui, SeekBar, Audio, Title, Mute, Play, Poster, PlayBar, VolumeBar, Duration, CurrentTime, BrowserUnsupported } from 'react-jplayer';
import JPlaylist, { initializeOptions, Playlist, Next, Previous, MediaLink, Title as PlaylistTitle } from 'react-jplaylist';

import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons";
import { faStepForward } from "@fortawesome/free-solid-svg-icons";
import { faPauseCircle } from "@fortawesome/free-regular-svg-icons";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { faTabletAlt } from "@fortawesome/free-solid-svg-icons";
import { faVolumeMute } from "@fortawesome/free-solid-svg-icons";

class PlayerBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      playing: false,
      track: null
    }

    this.togglePlay = this.togglePlay.bind(this);
    this.nextTogglePlay = this.nextTogglePlay.bind(this);
    this.toggleTrack = this.toggleTrack.bind(this);
  }

  togglePlay() {
    this.setState({playing: !this.state.playing});
  }

  nextTogglePlay() {
    if (this.state.playing === false) {
      this.setState({playing: true});
    }
  }

  componentDidMount() {
    if (typeof this.props.track !== 'undefined') {
      this.setState({track: this.props.track.media})
    }
  }

  toggleTrack() {
    const { nowPlaying } = this.props;
    if (!nowPlaying) {
      return;
    } 

    const trackAudio = document.getElementsByClassName(nowPlaying.title);
    
    if (trackAudio[0].paused){
      trackAudio[0].play().then(() => this.setState({ playing: true }));
    } else {
      trackAudio[0].pause();
      this.setState({ playing: false });
    }
  }

  
  render(){
    let webplayerPlayBar = "webplayer-play-bar";
    let webplayerPlayBarFooter = "webplayer-play-bar-footer";
    let webplayerPlayBarContent = "webplayer-play-bar-content";
    
    let webplayerPlaybarLeft = "webplayer-play-bar-left";

    let currentlyPlaying = "currently-playing";
    let nowPlayingCover = "now-playing-cover";
    let nowPlayingInfo = "now-playing-info";
    let nowPlayingSongTitle = "now-plahying-song-title";
    let nowPlayingLikeButtonWrapper = "now-playing-like-button-wrapper";
    let likeButton = "like-button";

    let webplayerPlaybarRight = "webplayer-play-bar-right";
    let innerPlaybarRight = "inner-playbar-right";
    let extraControls = "extra-controls";
    let devicePickerButtonContainer = "device-pickker-button-container";
    let devicePickerButton = "device-picker-button";
    let volumeBar = "volume-bar";
    let volumeButton = "volume-button";

    let webplayerPlaybarCenter = "webplayer-play-bar-center";
    let playerControlsContainer = "player-controls-container";
    let playerControlsButtons = "player-controls-buttons";
    let controlButtonWrapper = "control-button-wrapper";
    let controlButton = "control-button";
    let playbackBarContainer = "playback-bar-container";
    let playbackBarProgressTime = "playback-bar-progress-time";
    let progressBar = "progress-bar";
    let middleAlignBackground = "middle-align-background";
    let progressBarWrapper = "progress-bar-wrapper";
    let progressBarForeground = "progress-bar-foreground";
    let progressBarSlider = "progress-bar-slider";

    let heart = <FontAwesomeIcon icon={faHeart} size="2x" />;
    let skipBack = <FontAwesomeIcon icon={faStepBackward} size="2x" />;
    let skipForward = <FontAwesomeIcon icon={faStepForward} size="2x" />;
    let pause = <FontAwesomeIcon icon={faPauseCircle} size="2x" />;
    let play = <FontAwesomeIcon icon={faPlayCircle} size="2x" />;
    let device = <FontAwesomeIcon icon={faTabletAlt} size="2x" />;
    let volume = <FontAwesomeIcon icon={faVolumeMute} size="2x" />;

    const jPlayerOptions = {
      id: 'PlayerBar',
      showRemainingDuration: true,
      smoothPlayBar: true,
      keyEnabled: false,
      paused: !this.state.playing,
    }

    const jPlaylistOptions = {
      hidePlaylist: true,
      playlist: this.props.tracks,
    }

    initializeOptions(jPlayerOptions, jPlaylistOptions);

    let { nowPlaying, track } = this.props

    nowPlaying = nowPlaying || {title: ""};
  
    return (
        <div className={webplayerPlayBar}>
        <footer className={webplayerPlayBarFooter}>
        <JPlaylist id={jPlayerOptions.id}>
          <JPlayer classname={webplayerPlayBar}>
            <Audio />
            <Gui>
              <div className={webplayerPlayBarContent}>
                <div className={webplayerPlaybarLeft}>
                  <div className={currentlyPlaying}>
                    <div className={nowPlayingCover}>
                      <div className="now-playing-cover-slot">
                        <div className="cover-art-shadow">
                          <div className="now-playing-cover-image">
                            <Poster />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={nowPlayingInfo}>
                      <div className={nowPlayingSongTitle}>
                        {track === {} ?
                          <span>Now Playing</span> :
                            <span><Title /></span>
                        }
                      </div>
                    </div>
                    <div className={nowPlayingLikeButtonWrapper}>
                      <button className={likeButton}>{heart}</button>
                    </div>
                  </div>
                </div>
                <div className={webplayerPlaybarCenter}>
                  <div className={playerControlsContainer}>
                    <div className={playerControlsButtons}>
                      <div className={controlButtonWrapper}>
                        <Previous><div className={controlButton}>{skipBack}</div></Previous>
                      </div>
                      <div className={controlButtonWrapper}>
                        <Play>
                          <div
                            onClick={this.togglePlay}
                            className={controlButton}>
                            {
                            jPlayerOptions.paused ? 
                              <div>{play}</div> : 
                              <div>{pause}</div>
                            }
                          </div>
                        </Play>
                      </div>
                      <div className={controlButtonWrapper}>
                        <Next className={controlButton}>
                          <div 
                          className={controlButton}
                          onClick={this.nextTogglePlay}
                          >
                            {skipForward}
                          </div>
                        </Next>
                      </div>
                    </div>
                    <div className={playbackBarContainer}>
                      <div className={playbackBarProgressTime}>
                        <Duration />
                      </div>
                      {/* <div className={progressBar}> */}
                        <PlayBar />
                      {/* </div> */}
                        <div className={playbackBarProgressTime}>duration</div>
                    </div>
                  </div>
                </div>
                <div className={webplayerPlaybarRight}>
                  <div className={innerPlaybarRight}>
                    <div className={extraControls}>
                      <div>
                        <span className={devicePickerButtonContainer}>
                          <button className={devicePickerButton}>{device}</button>
                        </span>
                      </div>
                      <div className="jp-volume-container">
                        <Mute>
                          <i className="fa">{/* Icon set in css */}</i>
                        </Mute>
                        <div className="jp-volume-slider">
                          <div className="jp-volume-bar-container">
                            <VolumeBar />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <BrowserUnsupported />
            </Gui>
          </JPlayer>
        </JPlaylist>
        </footer>
        </div>

// ###############################################################################


      // <div className={webplayerPlayBar}>
      //   <footer className={webplayerPlayBarFooter}>
      //     <div className={webplayerPlayBarContent}>
      //       <div className={webplayerPlaybarLeft}>
      //         <div className={currentlyPlaying}>
      //           <div className={nowPlayingCover}>
      //             <div className="now-playing-cover-slot">
      //               <div className="cover-art-shadow">
      //                 <div>
      //                   {nowPlaying === {} ? 
      //                   image :
      //                   <img className="now-playing-cover-image" src={nowPlaying.album_art} alt="album art"/>
      //                   }
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //           <div className={nowPlayingInfo}>
      //             <div className={nowPlayingSongTitle}>
      //               {nowPlaying === {} ? 
      //               <span>Now Playing</span> :
      //               <span>{nowPlaying.title}</span> 
      //               }
      //             </div>
      //           </div>
      //           <div className={nowPlayingLikeButtonWrapper}>
      //             <button className={likeButton}>{heart}</button>
      //           </div>
      //         </div>
      //       </div>
      //       <div className={webplayerPlaybarCenter}>
      //         <div className={playerControlsContainer}>
      //           <div className={playerControlsButtons}>
      //             <div className={controlButtonWrapper}>
      //               <button className={controlButton}>{skipBack}</button>
      //             </div>
      //             <div className={controlButtonWrapper}>
      //               {!this.state.playing ? 
      //               <button 
      //               className={controlButton}
      //               onClick={this.toggleTrack}
      //               >{play}</button> :
      //               <button 
      //               className={controlButton}
      //               onClick={this.toggleTrack}
      //               >{pause}</button> }
      //             </div>
      //             <div className={controlButtonWrapper}>
      //               <button className={controlButton}>{skipForward}</button>
      //             </div>
      //           </div>
      //           <div className={playbackBarContainer}>
      //             <div className={playbackBarProgressTime}>
      //               <span>0:00</span>
      //             </div>
      //             <div className={progressBar}>
      //               <div className={middleAlignBackground}>
      //                 <div className={progressBarWrapper}>
      //                   <div className={progressBarForeground}></div>
      //                 </div>
      //                 <button className={progressBarSlider}></button>
      //               </div>
      //             </div>
      //             <div className={playbackBarProgressTime}>0:00</div>
      //           </div>
      //         </div>
      //       </div>
      //       <div className={webplayerPlaybarRight}>
      //         <div className={innerPlaybarRight}>
      //           <div className={extraControls}>
      //             <div>
      //               <span className={devicePickerButtonContainer}>
      //                 <button className={devicePickerButton}>{device}</button>
      //               </span>
      //             </div>
      //             <div className={volumeBar}>
      //               <button className={volumeButton}>{volume}</button>
      //               <div className={progressBar}>
      //                 <div className={middleAlignBackground}>
      //                   <div className={progressBarWrapper}>
      //                     <div className={progressBarForeground}></div>
      //                   </div>
      //                   <button className={progressBarSlider}></button>
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //         </div>
      //       </div>
      //     </div>
      //   </footer>
      // </div>
    );
  }
}

export default PlayerBar;