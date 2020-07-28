import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

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
    let { playlist } = this.props;
    return (
      <div className={playlistItemContainer}>
        <div className={playlistItemContentContainer}>
          <div className={playlistItemImageContainer}>
            <img className={playlistItemImage} src={playlist.image} />
          </div>
          <div 
          className={playlistItemTitleContainer}
            onClick={
              () => {
                this.props.fetchPlaylist(playlist.id);
                this.props.fetchPlaylistTracks(playlist.id);
              }}
          >
            <Link
              to={`/webplayer/playlist/${playlist.id}`}
              className={playlistItemTitleLink}
            >
              <span className={playlistItemTitle}>{playlist.title}</span>
            </Link>
            <div className={playlistItemDescription}>
              <span>{playlist.description}</span>
            </div>
            <div className={playlistItemSizer}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PlaylistItem);