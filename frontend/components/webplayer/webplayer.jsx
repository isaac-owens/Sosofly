import React from 'react';
import { Link } from 'react-router-dom';

import Modal from '../modal/modal';
import TopBar from './top_bar';
import NavBar from './nav_bar';
import PlayBar from './play_bar';
import Main from './main';

const DeletePlaylistContext = React.createContext();

class Webplayer extends React.Component {
  constructor(props) {
    super(props);
    this.generatePlaylists = this.generatePlaylists.bind(this);
  }

  componentDidMount() {
    //   //debugger
    this.props.fetchUserPlaylists(this.props.currentUser.id);
  }

  generatePlaylists() {
    let playlists = this.props.playlists.slice(6);
    playlists.map(playlist => {
      return <PlaylistItem playlist={playlist} key={playlist.id} />
    });
  };

  render() {
    let webplayerBody = "webplayer-body";
    let main = "main";
    let Root = "Root";
    let webplayerTopContainer = "webplayer-top-container";

    let { deletePlaylistForm, playlists, currentUser } = this.props;

    return (
      <div className={webplayerBody}>
        <div className={main}>
          <div className={Root}>
            <div></div>
            <Modal />
            <div className={webplayerTopContainer}>
              <TopBar currentUser={currentUser}/>
              <NavBar playlists={playlists} createPlaylistForm={deletePlaylistForm}/>
              <PlayBar />
              <Main playlists={this.props.playlists}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Webplayer