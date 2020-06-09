import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';

import PlaylistItem from "../playlist/playlist_item";
import PlaylistShow from "./main/playlist_show";
import Landing from "./main/landing"

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
                <Switch>
                  <Route exact path="/webplayer" component={Landing} />
                  <Route exact path="/webplayer/playlist" component={PlaylistShow} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;