import React from 'react';
import { Link } from 'react-router-dom';

import Modal from '../modal/modal';
import TopBar from './top_bar';
import NavBar from './nav_bar';
import PlayerBar from './player_bar';
import Main from './main';

class Webplayer extends React.Component {
  constructor(props) {
    super(props);
    this.generatePlaylists = this.generatePlaylists.bind(this);
  }

  componentDidMount() {
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

    let { 
      deletePlaylistForm, 
      createPlaylistForm,
      setOption,
      playlists,
      tracks,
      currentUser, 
      logout
    } = this.props;
    playlists = playlists || {};
    return (
      <div className={webplayerBody}>
        <div className={main}>
          <div className={Root}>
            <div></div>
            <Modal />
            <div className={webplayerTopContainer}>
              <TopBar logout={logout} currentUser={currentUser}/>
              <NavBar 
              playlists={playlists} 
              deletePlaylistForm={deletePlaylistForm}
              createPlaylistForm={createPlaylistForm}
              />
              <PlayerBar 
              tracks={tracks}
              nowPlaying={this.props.nowPlaying}
              />
              <Main 
                playlists={playlists}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Webplayer;