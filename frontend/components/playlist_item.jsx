import React from 'react';
import { Link } from 'react-router-dom';


class PlaylistItem extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    let playlistItemContainer = "playlist-item-container";
    let playlistItemContentContainer = "playlist-item-content-container";
    let playlistItemImageContainer = "playlist-item-image-container";
    let playlistItemImage = "playlist-item-image";
    let playlistItemTitleContainer = "playlist-item-title-container";
    let playlistItemTitleLink = "playlist-item-playlist-link";
    let playlistItemTitle = "playlist-item-title";
    let playlistItemDescription = "playlist-item-description";
    let playlistItemSizer = "playlist-item-sizer";

    let playlistClassNames = ["playlist-rows", "playlist-columns"];
    playlistClassNames = playlistClassNames.join(" ");

    return (
      <div className={playlistItemContainer}>
        <div className={playlistItemContentContainer}>
          <div className={playlistItemImageContainer}>
            image here
            image here
            image here
            image here
            image here
            image here
            image here
            image here
            image here
            image here
          </div>
        </div>
        <div className={playlistItemTitleContainer}>
          <Link to="" className={playlistItemTitleLink}>
            <span className={playlistItemTitle}>Playlist Title</span>
          </Link>
          <div className={playlistItemDescription}>
            <span>Playlist description fits here.</span>
          </div>
          <div className={playlistItemSizer}></div>
        </div>
      </div>
    );
  }
}

export default PlaylistItem;