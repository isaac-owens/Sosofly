import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { faFire } from "@fortawesome/free-solid-svg-icons";

class Webplayer extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let webplayerBody = "webplayer-body";
    let main = "main";
    let Root = "Root";
    let webplayerTopContainer = "webplayer-top-container";

    let webplayerTopBar = "webplayer-top-bar";
    let webplayerTopBarHeader = "webplayer-top-bar-header";
    let webplayerTopBarOuterTransition = "webplayer-top-bar-outer-transition";
    let webplayerTopBarInnerTransition = "webplayer-top-bar-inner-transition";
    let webplayerTopBarHeaderNavLinks = "webplayer-top-bar-header-nav-links";
    let webplayerTopBarHeaderNavButton = "webplayer-top-bar-header-nav-button";
    let webplayerTopBarUserDropdown = "webplayer-top-bar-user-dropdown";
    let webplayerTopBarUserButton = "webplayer-top-bar-user-button";
    let webplayerTopBarIconBoxContainer = "webplayer-top-bar-icon-box-container";
    let webplayerTopBarIconCircleContainer = "webplayer-top-bar-icon-circle-container";
    let webplayerTopBarUsername = "webplayer-top-bar-username";
    let webplayerTopBarIcon = "webplayer-top-bar-icon";


    let webplayerNavBar = "webplayer-nav-bar";
    let webplayerNavBarContentContainer = "webplayer-nav-bar-content-container";
    let webplayerNavBarLogolinkContainer = "webplayer-nav-bar-logolink-container";
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
    let webplayerNavBarRootlistPlaylists = "webplayer-nav-bar-rootlist-playlists";

    let createPlaylistButtonContainer = "create-playlist-button-container";
    let createPlaylistButton = "create-playlist-button";
    let createPlaylistButtonTitle = "create-playlist-button-title";
    let createPlaylistIcon = "create-playlist-icon";
    let RootlistDivider = "rootlist-divider";
    let RootlistScrollNode = "rootlist-scroll-node";
    
    let reactWrapper = "react-wrapper";
    let RootlistItem = "root=list=item";
    let textWrapper = "text-wrapper";
    let playlistTitle = "playlist-title";

    let webplayerPlayBar = "webplayer-play-bar"
    let webplayerPlayBarFooter = "webplayer-play-bar-footer";
    let webplayerPlayBarContent = "webplayer-play-bar-content";

    let webplayerMain = "webplayer-main";
    let webplayerMainContainer = "webplayer-main-container";
    let webplayerScrollNode = "webplayer-scroll-node";
    let webplayerScrollNodeChildSpacer = "webplayer-scroll-node-child-spacer";
    let webplayerScrollNodeChild = "webplayer-scroll-node-child";

    let webplayerPlaybarLeft = "webplayer-play-bar-left"
    let nowPlaying = "now-playing";
    let webplayerPlaybarRight = "webplayer-play-bar-right";
    let webplayerPlaybarCenter = "webplayer-play-bar-center";

    let webplayerClassNames = ["webplayer-main-grid", "content-spacing"];
    webplayerClassNames = webplayerClassNames.join(' ');

    let playlistClassNames = ["playlist-rows", "playlist-columns"];
    playlistClassNames = playlistClassNames.join(' ');

    let playlistCollection = "playlist-collection";
    let playlistCollectionHeaderGrid = "playlist-collection-header-grid";
    let playlistCollectionHeaderFlex = "playlist-collection-header-flex";
    let playlistCollectionHeaderWidth = "playlist-collection-header-width";

    let playlistCollectionHeader = "playlist-collection-header";
    let GenreHeaderLink = "genre-header-link";
    let GenreIndexLink = "genre-index-link";

    let sosoflyHeaderLogo = <FontAwesomeIcon icon={faCompactDisc} size="2x" />;
    let chevronLeft = <FontAwesomeIcon icon={faChevronLeft} size="2x" />;
    let chevronRight = <FontAwesomeIcon icon={faChevronRight} size="2x" />;
    let userIcon = <FontAwesomeIcon icon={faUser} size="2x" />;
    let homeIcon = <FontAwesomeIcon icon={faHome} size="1x" />;
    let searchIcon = <FontAwesomeIcon icon={faSearch} size="1x" />;
    let libraryIcon = <FontAwesomeIcon icon={faAlignJustify} size="1x" />;
    let createIcon = <FontAwesomeIcon icon={faPlusSquare} size="3x" />;
    let likedSongsIcon = <FontAwesomeIcon icon={faFire} size="3x" />;

    return (
      <div className={webplayerBody}>
      <div className={main}>
        <div className={Root}>
          <div></div>
          <div className={webplayerTopContainer}>
            <div className={webplayerTopBar}>
              <header className={webplayerTopBarHeader}>
                <div className={webplayerTopBarOuterTransition}>
                  <div className={webplayerTopBarInnerTransition}></div>
                </div>
                <div className={webplayerTopBarHeaderNavLinks}>
                  <button className={webplayerTopBarHeaderNavButton}>
                    {chevronLeft}
                  </button>
                  <button className={webplayerTopBarHeaderNavButton}>
                    {chevronRight}
                  </button>
                </div>
                <div className={webplayerTopBarUserDropdown}>
                  <button className={webplayerTopBarUserButton}>
                    <figure className={webplayerTopBarIconBoxContainer}>
                      <div className={webplayerTopBarIconCircleContainer}>
                        {userIcon}
                      </div>
                    </figure>
                    <span className={webplayerTopBarUsername}>username</span>
                    <span className={webplayerTopBarIcon}>icon</span>
                  </button>
                </div>
              </header>
              <div></div>
            </div>
            <div className={webplayerNavBar}>
              <nav className={webplayerNavBarContentContainer}>
                <div className={webplayerNavBarLogolinkContainer}>
                  <Link to="/account/overview" className={webplayerNavBarLogolink}>
                    {sosoflyHeaderLogo} Sosofly
                  </Link>
                </div>
                <ul className={webplayerNavBarNavLinks}>
                  <li className={navBarNavLinkItem}>
                    <Link to="/account/overview" className={navBarLink}>
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
                          <div className={createPlaylistIcon}>
                            {createIcon}
                          </div>
                          <span className={createPlaylistButtonTitle}>Create Playlist</span>
                        </button>
                      </div>
                      <div className={createPlaylistButtonContainer}>
                        <button className={createPlaylistButton}>
                          <div className={createPlaylistIcon}>
                            {likedSongsIcon}
                          </div>
                          <span className={createPlaylistButtonTitle}>Liked Songs</span>
                        </button>
                      </div>
                      <hr className={RootlistDivider}/>
                      <ul className={RootlistScrollNode}>
                        {/* React generated playlist lists */}
                        <div className={reactWrapper}>
                          <li className={RootlistItem}>
                            <div className={textWrapper}>
                              <span className={playlistTitle}>
                                Playlist title here
                              </span>
                            </div>
                          </li>
                        </div>
                        <div className={reactWrapper}>
                          <li className={RootlistItem}>
                            <div className={textWrapper}>
                              <span className={playlistTitle}>
                                Playlist title here
                              </span>
                            </div>
                          </li>
                        </div>
                        <div className={reactWrapper}>
                          <li className={RootlistItem}>
                            <div className={textWrapper}>
                              <span className={playlistTitle}>
                                Playlist title here
                              </span>
                            </div>
                          </li>
                        </div>
                        <div className={reactWrapper}>
                          <li className={RootlistItem}>
                            <div className={textWrapper}>
                              <span className={playlistTitle}>
                                Playlist title here
                              </span>
                            </div>
                          </li>
                        </div>
                        <div className={reactWrapper}>
                          <li className={RootlistItem}>
                            <div className={textWrapper}>
                              <span className={playlistTitle}>
                                Playlist title here
                              </span>
                            </div>
                          </li>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div className={webplayerPlayBar}>
              <footer className={webplayerPlayBarFooter}>
                <div className={webplayerPlayBarContent}>
                  <div className={webplayerPlaybarLeft}>
                    <div className={nowPlaying}></div>
                  </div>
                  <div className={webplayerPlaybarCenter}></div>
                  <div className={webplayerPlaybarRight}></div>
                </div>
              </footer>
            </div>
            <div className={webplayerMain}>
              <div className={webplayerMainContainer}>
                <div className={webplayerScrollNode}>
                  <div className={webplayerScrollNodeChildSpacer}>
                    <div className={webplayerScrollNodeChild}>
                      <div className={webplayerClassNames}>
                        {/* <PlaylistCollection /> */}
                        <section className={playlistCollection}>
                          <div className={playlistClassNames}>
                            <div className={playlistCollectionHeaderGrid}>
                              <div className={playlistCollectionHeaderFlex}>
                                <div className={playlistCollectionHeaderWidth}>
                                  <h2 className={playlistCollectionHeader}>
                                    <Link to="#" className={GenreHeaderLink}>
                                      Genre Title
                                    </Link>
                                  </h2>
                                </div>
                                <Link to="#" className={GenreIndexLink}>
                                  <span>See all</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </section>
                        <section className={playlistCollection}>
                          <div className={playlistClassNames}>
                            <div className={playlistCollectionHeaderGrid}>
                              <div className={playlistCollectionHeaderFlex}>
                                <div className={playlistCollectionHeaderWidth}>
                                  <h2 className={playlistCollectionHeader}>
                                    <Link to="#" className={GenreHeaderLink}>
                                      Genre Title
                                    </Link>
                                  </h2>
                                </div>
                                <Link to="#" className={GenreIndexLink}>
                                  <span>See all</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </section>
                        <section className={playlistCollection}>
                          <div className={playlistClassNames}>
                            <div className={playlistCollectionHeaderGrid}>
                              <div className={playlistCollectionHeaderFlex}>
                                <div className={playlistCollectionHeaderWidth}>
                                  <h2 className={playlistCollectionHeader}>
                                    <Link to="#" className={GenreHeaderLink}>
                                      Genre Title
                                    </Link>
                                  </h2>
                                </div>
                                <Link to="#" className={GenreIndexLink}>
                                  <span>See all</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </section>
                        <section className={playlistCollection}>
                          <div className={playlistClassNames}>
                            <div className={playlistCollectionHeaderGrid}>
                              <div className={playlistCollectionHeaderFlex}>
                                <div className={playlistCollectionHeaderWidth}>
                                  <h2 className={playlistCollectionHeader}>
                                    <Link to="#" className={GenreHeaderLink}>
                                      Genre Title
                                    </Link>
                                  </h2>
                                </div>
                                <Link to="#" className={GenreIndexLink}>
                                  <span>See all</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </section>
                        <section className={playlistCollection}>
                          <div className={playlistClassNames}>
                            <div className={playlistCollectionHeaderGrid}>
                              <div className={playlistCollectionHeaderFlex}>
                                <div className={playlistCollectionHeaderWidth}>
                                  <h2 className={playlistCollectionHeader}>
                                    <Link to="#" className={GenreHeaderLink}>
                                      Genre Title
                                    </Link>
                                  </h2>
                                </div>
                                <Link to="#" className={GenreIndexLink}>
                                  <span>See all</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </section>
                        <section className={playlistCollection}>
                          <div className={playlistClassNames}>
                            <div className={playlistCollectionHeaderGrid}>
                              <div className={playlistCollectionHeaderFlex}>
                                <div className={playlistCollectionHeaderWidth}>
                                  <h2 className={playlistCollectionHeader}>
                                    <Link to="#" className={GenreHeaderLink}>
                                      Genre Title
                                    </Link>
                                  </h2>
                                </div>
                                <Link to="#" className={GenreIndexLink}>
                                  <span>See all</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  };
};

export default Webplayer