import React from 'react';
import { Link } from 'react-router-dom';

import PlaylistItem from "../playlist/playlist_item";

class Main extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let webplayerMain = "webplayer-main";
    let webplayerMainContainer = "webplayer-main-container";
    let webplayerScrollNode = "webplayer-scroll-node";
    let webplayerScrollNodeChildSpacer = "webplayer-scroll-node-child-spacer";
    let webplayerScrollNodeChild = "webplayer-scroll-node-child";

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

    return (
      <div className={webplayerMain}>
        <div className={webplayerMainContainer}>
          <div className={webplayerScrollNode}>
            <div className={webplayerScrollNodeChildSpacer}>
              <div className={webplayerScrollNodeChild}>
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
                          {this.props.playlists.length > 0
                            ? this.props.playlists.map((playlist) => {
                                return (
                                  <PlaylistItem
                                    playlist={playlist}
                                    key={playlist.id}
                                  />
                                );
                              })
                            : ""}
                        </div>
                      </section>
                    </div>
                  </section>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;