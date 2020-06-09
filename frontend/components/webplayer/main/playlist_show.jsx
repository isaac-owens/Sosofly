import React from 'react';

class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let playlistShowHeader = "playlist-show-header";
    let playlistShowHeaderSetup = "playlist-show-header-setup";

    return (
      <section>
        <section>
          <div className={playlistShowHeader}>
            <div className={playlistShowHeaderSetup}>

            </div>
          </div>
        </section>
      </section>
    )
  }
}

export default PlaylistShow;