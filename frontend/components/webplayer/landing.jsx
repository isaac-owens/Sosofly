import React from 'react';
import PlaylistItem from "../playlist/playlist_item";
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPlaylist } from "../../actions/playlist_actions"
import { fetchPlaylistTracks } from "../../actions/track_actions"
class Landing extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let playlistCollection = "playlist-collection";

    let playlistCollectionHeaderGrid = "playlist-collection-header-grid";
    let playlistCollectionHeaderFlex = "playlist-collection-header-flex";
    let playlistCollectionHeaderWidth = "playlist-collection-header-width";

    let playlistCollectionHeader = "playlist-collection-header";
    let GenreHeaderLink = "genre-header-link";
    let GenreIndexLink = "genre-index-link";

    let webplayerClassNames = ["webplayer-main-grid", "content-spacing"];
    webplayerClassNames = webplayerClassNames.join(" ");

    let playlistClassNames = ["playlist-rows", "playlist-columns"];
    playlistClassNames = playlistClassNames.join(" ");

    let { playlists } = this.props;
    return (
      <section>
        <section>
          <div className={webplayerClassNames}>
            {/* <PlaylistCollection /> */}
            <section className={playlistCollection}>
              <div className={playlistClassNames}>
                <div className={playlistCollectionHeaderGrid}>
                  <div className={playlistCollectionHeaderFlex}>
                    <div className={playlistCollectionHeaderWidth}>
                      <h2 className={playlistCollectionHeader}>
                        <Link to="#" className={GenreHeaderLink}>
                          My Playlists
                        </Link>
                      </h2>
                    </div>
                    <Link to="#" className={GenreIndexLink}>
                      <span>See all</span>
                    </Link>
                  </div>
                </div>
                {playlists.length > 0
                  ? playlists.map((playlist) => {
                      return (
                        <PlaylistItem 
                        fetchPlaylist={this.props.fetchPlaylist}
                        fetchPlaylistTracks={this.props.fetchPlaylistTracks}
                        playlist={playlist} 
                        key={playlist.id} />
                      );
                    })
                  : ""}
              </div>
            </section>
          </div>
        </section>
      </section>
    );
  }
}

const mDTP = dispatch => {
  return {
    fetchPlaylist: playlistId => dispatch(fetchPlaylist(playlistId)),
    fetchPlaylistTracks: entityId => dispatch(fetchPlaylistTracks(entityId)),
  }
}

export default withRouter(connect(null, mDTP)(Landing));