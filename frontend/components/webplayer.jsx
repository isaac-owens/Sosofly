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
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faStepBackward } from "@fortawesome/free-solid-svg-icons";
import { faStepForward } from "@fortawesome/free-solid-svg-icons";
import { faPauseCircle } from "@fortawesome/free-regular-svg-icons";
import { faTabletAlt } from "@fortawesome/free-solid-svg-icons";
import { faVolumeMute } from "@fortawesome/free-solid-svg-icons";

import PlaylistItem from './playlist_item';

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
    let nowPlayingCover = "now-playing-cover";
    let nowPlayingInfo = "now-playing-info";
    let nowPlayingSongTitle = "now-plahying-song-title";
    let nowPlayingLikeButtonWrapper = "now-playing-like-button-wrapper"
    let likeButton = "like-button";

    let webplayerPlaybarRight = "webplayer-play-bar-right";
    let innerPlaybarRight = "inner-playbar-right";
    let extraControls = "extra-controls";
    let devicePickerButtonContainer = "device-pickker-button-container";
    let devicePickerButton = "device-picker-button";
    let volumeBar = "volume-bar";
    let volumeButton = "volum-button";

    let webplayerPlaybarCenter = "webplayer-play-bar-center";
    let playerControlsContainer = "player-controls-container";
    let playerControlsButtons = "player-controls-buttons";
    let controlButtonWrapper = "control-button-wrapper";
    let controlButton = "controlButton";
    let playbackBarContainer = "playback-bar-container";
    let playbackBarProgressTime = "playback-bar-progress-time";
    let progressBar = "progress-bar";
    let middleAlignBackground = "middle-align-background";
    let progressBarWrapper = "progress-bar-wrapper";
    let progressBarForeground = "progress-bar-foreground";
    let progressBarSlider = "progress-bar-slider";

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
    let userIcon = <FontAwesomeIcon icon={faUser} size="1x" />;
    let homeIcon = <FontAwesomeIcon icon={faHome} size="1x" />;
    let searchIcon = <FontAwesomeIcon icon={faSearch} size="1x" />;
    let libraryIcon = <FontAwesomeIcon icon={faAlignJustify} size="1x" />;
    let createIcon = <FontAwesomeIcon icon={faPlusSquare} size="3x" />;
    let likedSongsIcon = <FontAwesomeIcon icon={faFire} size="3x" />;
    let triangleDown = <FontAwesomeIcon icon={faCaretDown} size="1x" />;
    let heart = <FontAwesomeIcon icon={faHeart} size="2x" />;
    let skipBack = <FontAwesomeIcon icon={faStepBackward} size="2x" />;
    let skipForward = <FontAwesomeIcon icon={faStepForward} size="2x" />;
    let pause = <FontAwesomeIcon icon={faPauseCircle} size="2x" />;
    let device = <FontAwesomeIcon icon={faTabletAlt} size="2x" />;
    let volume = <FontAwesomeIcon icon={faVolumeMute} size="2x" />;

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
                      <span className={webplayerTopBarUsername}>
                        {this.props.currentUser.username}
                      </span>
                      <span className={webplayerTopBarIcon}>
                        {triangleDown}
                      </span>
                    </button>
                  </div>
                </header>
                <div></div>
              </div>
              <div className={webplayerNavBar}>
                <nav className={webplayerNavBarContentContainer}>
                  <div className={webplayerNavBarLogolinkContainer}>
                    <Link
                      to="/account/overview"
                      className={webplayerNavBarLogolink}
                    >
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
                        <div className={navBarHomeActiveIcon}>
                          {libraryIcon}
                        </div>
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
                            <span className={createPlaylistButtonTitle}>
                              Create Playlist
                            </span>
                          </button>
                        </div>
                        <div className={createPlaylistButtonContainer}>
                          <button className={createPlaylistButton}>
                            <div className={createPlaylistIcon}>
                              {likedSongsIcon}
                            </div>
                            <span className={createPlaylistButtonTitle}>
                              Liked Songs
                            </span>
                          </button>
                        </div>
                        <hr className={RootlistDivider} />
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
                      <div className={nowPlaying}>
                        <div className={nowPlayingCover}>
                          <Link to="#">cover art</Link>
                        </div>
                        <div className={nowPlayingInfo}>
                          <div className={nowPlayingSongTitle}>
                            <span>Song Title</span>
                          </div>
                        </div>
                        <div className={nowPlayingLikeButtonWrapper}>
                          <button className={likeButton}>{heart}</button>
                        </div>
                      </div>
                    </div>
                    <div className={webplayerPlaybarCenter}>
                      <div className={playerControlsContainer}>
                        <div className={playerControlsButtons}>
                          <div className={controlButtonWrapper}>
                            <button className={controlButton}>
                              {skipBack}
                            </button>
                          </div>
                          <div className={controlButtonWrapper}>
                            <button className={controlButton}>{pause}</button>
                          </div>
                          <div className={controlButtonWrapper}>
                            <button className={controlButton}>
                              {skipForward}
                            </button>
                          </div>
                        </div>
                        <div className={playbackBarContainer}>
                          <div className={playbackBarProgressTime}>
                            <span>0:00</span>
                          </div>
                          <div className={progressBar}>
                            <div className={middleAlignBackground}>
                              <div className={progressBarWrapper}>
                                <div className={progressBarForeground}></div>
                              </div>
                              <button className={progressBarSlider}></button>
                            </div>
                          </div>
                          <div className={playbackBarProgressTime}>0:00</div>
                        </div>
                      </div>
                    </div>
                    <div className={webplayerPlaybarRight}>
                      <div className={innerPlaybarRight}>
                        <div className={extraControls}>
                          <div>
                            <span className={devicePickerButtonContainer}>
                              <button className={devicePickerButton}>
                                {device}
                              </button>
                            </span>
                          </div>
                          <div className={volumeBar}>
                            <button className={volumeButton}>{volume}</button>
                            <div className={progressBar}>
                              <div className={middleAlignBackground}>
                                <div className={progressBarWrapper}>
                                  <div className={progressBarForeground}></div>
                                </div>
                                <button className={progressBarSlider}></button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
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
                                    <div
                                      className={playlistCollectionHeaderFlex}
                                    >
                                      <div
                                        className={
                                          playlistCollectionHeaderWidth
                                        }
                                      >
                                        <h2
                                          className={playlistCollectionHeader}
                                        >
                                          <Link
                                            to="#"
                                            className={GenreHeaderLink}
                                          >
                                            Genre Title
                                          </Link>
                                        </h2>
                                      </div>
                                      <Link to="#" className={GenreIndexLink}>
                                        <span>See all</span>
                                      </Link>
                                    </div>
                                  </div>
                                  <PlaylistItem />
                                  <PlaylistItem />
                                  <PlaylistItem />
                                  <PlaylistItem />
                                  <PlaylistItem />
                                  <PlaylistItem />
                                </div>
                              </section>
                              <section className={playlistCollection}>
                                <div className={playlistClassNames}>
                                  <div className={playlistCollectionHeaderGrid}>
                                    <div
                                      className={playlistCollectionHeaderFlex}
                                    >
                                      <div
                                        className={
                                          playlistCollectionHeaderWidth
                                        }
                                      >
                                        <h2
                                          className={playlistCollectionHeader}
                                        >
                                          <Link
                                            to="#"
                                            className={GenreHeaderLink}
                                          >
                                            Genre Title
                                          </Link>
                                        </h2>
                                      </div>
                                      <Link to="#" className={GenreIndexLink}>
                                        <span>See all</span>
                                      </Link>
                                    </div>
                                  </div>
                                  <PlaylistItem />
                                  <PlaylistItem />
                                  <PlaylistItem />
                                  <PlaylistItem />
                                  <PlaylistItem />
                                  <PlaylistItem />
                                </div>
                              </section>
                              <section className={playlistCollection}>
                                <div className={playlistClassNames}>
                                  <div className={playlistCollectionHeaderGrid}>
                                    <div
                                      className={playlistCollectionHeaderFlex}
                                    >
                                      <div
                                        className={
                                          playlistCollectionHeaderWidth
                                        }
                                      >
                                        <h2
                                          className={playlistCollectionHeader}
                                        >
                                          <Link
                                            to="#"
                                            className={GenreHeaderLink}
                                          >
                                            Genre Title
                                          </Link>
                                        </h2>
                                      </div>
                                      <Link to="#" className={GenreIndexLink}>
                                        <span>See all</span>
                                      </Link>
                                    </div>
                                  </div>
                                  <PlaylistItem />
                                  <PlaylistItem />
                                  <PlaylistItem />
                                  <PlaylistItem />
                                  <PlaylistItem />
                                  <PlaylistItem />
                                </div>
                              </section>
                              <section className={playlistCollection}>
                                <div className={playlistClassNames}>
                                  <div className={playlistCollectionHeaderGrid}>
                                    <div
                                      className={playlistCollectionHeaderFlex}
                                    >
                                      <div
                                        className={
                                          playlistCollectionHeaderWidth
                                        }
                                      >
                                        <h2
                                          className={playlistCollectionHeader}
                                        >
                                          <Link
                                            to="#"
                                            className={GenreHeaderLink}
                                          >
                                            Genre Title
                                          </Link>
                                        </h2>
                                      </div>
                                      <Link to="#" className={GenreIndexLink}>
                                        <span>See all</span>
                                      </Link>
                                    </div>
                                  </div>
                                  <PlaylistItem />
                                  <PlaylistItem />
                                  <PlaylistItem />
                                  <PlaylistItem />
                                  <PlaylistItem />
                                  <PlaylistItem />
                                </div>
                              </section>
                              <section className={playlistCollection}>
                                <div className={playlistClassNames}>
                                  <div className={playlistCollectionHeaderGrid}>
                                    <div
                                      className={playlistCollectionHeaderFlex}
                                    >
                                      <div
                                        className={
                                          playlistCollectionHeaderWidth
                                        }
                                      >
                                        <h2
                                          className={playlistCollectionHeader}
                                        >
                                          <Link
                                            to="#"
                                            className={GenreHeaderLink}
                                          >
                                            Genre Title
                                          </Link>
                                        </h2>
                                      </div>
                                      <Link to="#" className={GenreIndexLink}>
                                        <span>See all</span>
                                      </Link>
                                    </div>
                                  </div>
                                  <PlaylistItem />
                                  <PlaylistItem />
                                  <PlaylistItem />
                                  <PlaylistItem />
                                  <PlaylistItem />
                                  <PlaylistItem />
                                </div>
                              </section>
                              <section className={playlistCollection}>
                                <div className={playlistClassNames}>
                                  <div className={playlistCollectionHeaderGrid}>
                                    <div
                                      className={playlistCollectionHeaderFlex}
                                    >
                                      <div
                                        className={
                                          playlistCollectionHeaderWidth
                                        }
                                      >
                                        <h2
                                          className={playlistCollectionHeader}
                                        >
                                          <Link
                                            to="#"
                                            className={GenreHeaderLink}
                                          >
                                            Genre Title
                                          </Link>
                                        </h2>
                                      </div>
                                      <Link to="#" className={GenreIndexLink}>
                                        <span>See all</span>
                                      </Link>
                                    </div>
                                  </div>
                                  <PlaylistItem />
                                  <PlaylistItem />
                                  <PlaylistItem />
                                  <PlaylistItem />
                                  <PlaylistItem />
                                  <PlaylistItem />
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
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default Webplayer