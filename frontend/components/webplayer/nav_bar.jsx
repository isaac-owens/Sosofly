import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";

import RootListItem from "./root_list_item";


class NavBar extends React.Component {
  constructor(props){
    super(props);
  }

  
  render() {
    
    let webplayerNavBar = "webplayer-nav-bar";
    let webplayerNavBarContentContainer = "webplayer-nav-bar-content-container";
    let webplayerNavBarLogolinkContainer =
    "webplayer-nav-bar-logolink-container";
    let webplayerNavBarLogolink = "webplayer-nav-bar-logolink";

    let webplayerNavBarNavLinks = "webplayer-nav-bar-nav-links";
    let navBarNavLinkItem = "nav-bar-nav-link-item";
    let navBarLink = "nav-bar-link";
    let navBarHomeIcon = "nav-bar-home-icon";
    let navBarHomeActiveIcon = "nav-bar-home-active-icon";
    let navBarLinkTitle = "nav-bar-link-title";

    let webplayerNavBarRootlist = "webplayer-nav-bar-rootlist";
    let RootlistHeader = "rootlist-header";
    let webplayerNavBarRootlistContent = "webplayer-nav-bar-rootlist-content";
    let webplayerNavBarRootlistPlaylists =
      "webplayer-nav-bar-rootlist-playlists";

    let createPlaylistButtonContainer = "create-playlist-button-container";
    let createPlaylistButton = "create-playlist-button";
    let createPlaylistButtonTitle = "create-playlist-button-title";
    let createPlaylistIcon = "create-playlist-icon";
    let RootlistDivider = "rootlist-divider";
    let RootlistScrollNode = "rootlist-scroll-node";

    let sosoflyHeaderLogo = <FontAwesomeIcon icon={faCompactDisc} size="2x" />;
    let homeIcon = <FontAwesomeIcon icon={faHome} size="1x" />;
    let searchIcon = <FontAwesomeIcon icon={faSearch} size="1x" />;
    let libraryIcon = <FontAwesomeIcon icon={faAlignJustify} size="1x" />;
    let createIcon = <FontAwesomeIcon icon={faPlusSquare} size="3x" />;
    let likedSongsIcon = <FontAwesomeIcon icon={faFire} size="3x" />;
 
    let {playlists, createPlaylistForm, deletePlaylistForm} = this.props;

    return (
      <div className={webplayerNavBar}>
        <nav className={webplayerNavBarContentContainer}>
          <div className={webplayerNavBarLogolinkContainer}>
            <Link to="/account/overview" className={webplayerNavBarLogolink}>
              {sosoflyHeaderLogo} Sosofly
            </Link>
          </div>
          <ul className={webplayerNavBarNavLinks}>
            <li className={navBarNavLinkItem}>
              <Link to="/webplayer" className={navBarLink}>
                <div className={navBarHomeIcon}></div>
                <div className={navBarHomeActiveIcon}>{homeIcon}</div>
                <span className={navBarLinkTitle}>Home</span>
              </Link>
            </li>
            <li className={navBarNavLinkItem}>
              <Link to="#" className={navBarLink}>
                <div className={navBarHomeIcon}></div>
                <div className={navBarHomeActiveIcon}>{searchIcon}</div>
                <span className={navBarLinkTitle}>Search</span>
              </Link>
            </li>
            <li className={navBarNavLinkItem}>
              <Link to="#" className={navBarLink}>
                <div className={navBarHomeIcon}></div>
                <div className={navBarHomeActiveIcon}>{libraryIcon}</div>
                <span className={navBarLinkTitle}>Your Library</span>
              </Link>
            </li>
          </ul>
          <div className={webplayerNavBarRootlist}>
            <div className={webplayerNavBarRootlistContent}>
              <div className={webplayerNavBarRootlistPlaylists}>
                <h2 className={RootlistHeader}>Playlists</h2>
                <div className={createPlaylistButtonContainer}>
                  <button className={createPlaylistButton}>
                    <div className={createPlaylistIcon}>{createIcon}</div>
                    {createPlaylistForm}
                  </button>
                </div>
                <div className={createPlaylistButtonContainer}>
                  <button className={createPlaylistButton}>
                    <div className={createPlaylistIcon}>{likedSongsIcon}</div>
                    <span className={createPlaylistButtonTitle}>
                      Liked Songs
                    </span>
                  </button>
                </div>
                <hr className={RootlistDivider} />
                <ul className={RootlistScrollNode}>
                  {/* React generated playlists list */}
                  {playlists.map((playlist) => (
                    <RootListItem  playlistId={playlist.id} playlist={playlist} deletePlaylistForm={deletePlaylistForm}/>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;