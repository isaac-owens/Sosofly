import React from 'react';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
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


    return (
        <section className={playlistShowPageTopContainer}>
          <div className={playlistShowHeader}>
            <div className={playlistShowHeaderSetup}></div>
              <div className={playlistShowHeaderGradient}></div>
              <div></div>
              <div className={playlistShowHeaderImageBox}>
                <div className={playlistShowHeaderImage}>
                  IMAGE HERE
                </div>
              </div>
              <div className={playlistShowHeaderBanner}>
                <h2 className={playlistShowHeaderSubBanner}>Playlist</h2>
                <span className={playlistShowHeaderTitleBox}>
                  <h1 className={playlistShowHeaderTitle}>Playlist Title Here</h1>
                </span>
            </div>
            </div>
            <div className={playlistTopColor}></div>
            <div className={playlistControlsBox}>
              <div className={playlistControls}></div>
            </div>
        </section>
    )
  }
}

export default PlaylistShow;