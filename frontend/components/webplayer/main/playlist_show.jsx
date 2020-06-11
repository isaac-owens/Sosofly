import React from 'react';
import { withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

import PlaylistShowMain from "../../playlist/playlist_show_main";

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPlaylistTracks(this.props.currentUser.id);
  }

  render() {
    //debugger
    let playlistShowPageTopContainer = "playlist-show-page-top-container";
    let playlistShowHeader = "playlist-show-header";
    let playlistShowHeaderSetup = "playlist-show-header-setup";
    let playlistShowHeaderGradient = "playlist-show-header-gradient";
    let playlistShowHeaderImageBox = "playlist-show-header-image-box";
    let playlistShowHeaderImage = "playlist-show-header-image";
    let playlistShowHeaderBanner = "playlist-show-header-banner";
    let playlistShowHeaderSubBanner = "playlist-show-header-sub-banner";
    let playlistShowHeaderTitleBox = "playlist-show-header-title-box";
    let playlistShowHeaderTitle = "playlist-show-header-title";
    let playlistTopColor = "playlist-top-color";
    let playlistControlsBox = "playlist-controls-box";
    let playlistControls = "playlist-controls";
    let playlistShowPlayButon = "playlist-show-play-button";
    let fireButtonActive = "fire-button-active";
    let fireButtonInactive = "fire-button-inactive";
    let contextMenu = "context-menu";
    let contextEllipsis = "context-ellipsis";

    let playCircle = <FontAwesomeIcon icon={faPlayCircle} size="5x" />;
    let fire = <FontAwesomeIcon icon={faFire} size="3x" />;
    let ellipsis = <FontAwesomeIcon icon={faEllipsisH} size="3x" />;

    let { playlists } = this.props;
    playlists = playlists || { 52: {title: "Hello!"}};

    return (
      <section className={playlistShowPageTopContainer}>
        <div className={playlistShowHeader}>
          <div className={playlistShowHeaderSetup}></div>
          <div className={playlistShowHeaderGradient}></div>
          <div></div>
          <div className={playlistShowHeaderImageBox}>
            <div className={playlistShowHeaderImage}>IMAGE HERE</div>
          </div>
          <div className={playlistShowHeaderBanner}>
            <h2 className={playlistShowHeaderSubBanner}>Playlist</h2>
            <span className={playlistShowHeaderTitleBox}>
              <h1 className={playlistShowHeaderTitle}>{playlists[52].title}</h1>
            </span>
          </div>
        </div>
        <div className={playlistTopColor}></div>
        <div className={playlistControlsBox}>
          <div className={playlistControls}>
            <button className={playlistShowPlayButon}>{playCircle}</button>
            <button className={fireButtonInactive}>{fire}</button>
            <div className={contextMenu}>
              <button className={contextEllipsis}>{ellipsis}</button>
            </div>
          </div>
        </div>
        <PlaylistShowMain />
      </section>
    );
  }
}

export default PlaylistShow;