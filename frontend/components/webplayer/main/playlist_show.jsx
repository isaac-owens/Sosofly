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
          </div>
        </section>
      </section>
    )
  }
}

export default PlaylistShow;