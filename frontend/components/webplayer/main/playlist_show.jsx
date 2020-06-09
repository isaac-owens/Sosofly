import React from 'react';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let playlistShowHeader = "playlist-show-header";
    let playlistShowHeaderSetup = "playlist-show-header-setup";
    let playlistShowHeaderGradient = "playlist-show-header-gradient";
    let playlistShowHeaderImageBox = "playlist-show-header-image-box";
    let playlistShowHeaderImage = "playlist-show-header-image";
    let playlistShowHeaderBanner = "playlist-show-header-banner";
    let playlistShowHeaderSubBanner = "playlist-show-header-sub-banner";
    let playlistShowHeaderTitleBox = "playlist-show-header-title-box";
    let playlistShowHeaderTitle = "playlist-show-header-title";

    return (
      <section>
        <section>
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
        </section>
      </section>
    )
  }
}

export default PlaylistShow;