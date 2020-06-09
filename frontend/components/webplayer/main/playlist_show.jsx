import React from 'react';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let playlistShowHeader = "playlist-show-header";
    let playlistShowHeaderSetup = "playlist-show-header-setup";
    let playlistShowHeaderGradient = "playlist-show-header-gradient";

    return (
      <section>
        <section>
          <div className={playlistShowHeader}>
            <div className={playlistShowHeaderSetup}>
              <div className={playlistShowHeaderGradient}>
                
              </div>
            </div>
          </div>
        </section>
      </section>
    )
  }
}

export default PlaylistShow;