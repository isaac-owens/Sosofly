import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PlaylistShowContainer from "../playlist/playlist_show_container";
import Landing from "./landing"

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
      

    return (
      <div className={webplayerMain}>
        <div className={webplayerMainContainer}>
          <div className={webplayerScrollNode}>
            <div className={webplayerScrollNodeChildSpacer}>
              <div className={webplayerScrollNodeChild}>
                <Switch>
                  <Route exact path="/webplayer" 
                  render={(props) => <Landing {...props} playlists={this.props.playlists} />} />
                  <Route exact path="/webplayer/playlist/:id" component={PlaylistShowContainer} />
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