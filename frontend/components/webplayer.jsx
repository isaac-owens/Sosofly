import React from 'react';
import { Link } from 'react-router-dom';

class Webplayer extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    let webplayerTopContainer = "webplayer-top-container";

    let webplayerTopBar = "webplayer-top-bar";
    let webplayerTopBarHeader = "webplayer-top-bar-header";
    let webplayerTopBarOuterTransition = "webplayer-top-bar-outer-transition";
    let webplayerTopBarInnerTransition = "webplayer-top-bar-inner-transition";
    let webplayerTopBarHeaderNavLinks = "webplayer-top-bar-header-nav-links";

    let webplayerNavBar = "webplayer-nav-bar";
    let webplayerNavBarContentContainer = "webplayer-nav-bar-content-container";
    let webplayerNavBarLogolinkContainer = "webplayer-nav-bar-logolink-container";
    let webplayerNavBarLogolink = "webplayer-nav-bar-logolink";

    let webplayerPlayBar = "webplayer-play-bar"
    let webplayerPlayBarFooter = "webplayer-play-bar-footer";
    let webplayerPlayBarContentContainer = "webplayer-play-bar-content-container";
    let webplayerMainContainer = "webplayer-main-container";
    let webplayerScrollNode = "webplayer-scroll-node";
    let webplayerScrollNodeChildSpacer = "webplayer-scroll-node-child-spacer";
    let webplayerScrollNodeChild = "webplayer-scroll-node-child";

    let webplayerClassNames = ["webplayer-main-grid", "content-spacing"];
    webplayerClassNames = webplayerClassNames.join(' ');

    let PlaylistCollection = "playlist-collection";
    let PlaylistCollectionGrid = "playlist-collection-grid";
    let PlaylistCollectionHeader = "playlist-collection-header";
    let GenreHeaderLink = "genre-header-link";
    let GenreIndexLink = "genre-index-link";

    return (
      <div className={webplayerTopContainer}>
        <div className={webplayerTopBar}>
          <header className={webplayerTopBarHeader}>
            <div className={webplayerTopBarOuterTransition}>
              <div className={webplayerTopBarInnerTransition}></div>
            </div>
            <div className={webplayerTopBarHeaderNavLinks}>
              <button>back icon here</button>
              <button>forward icon here</button>
            </div>
          </header>
        </div>
        <div className={webplayerNavBar}>
          <nav className={webplayerNavBarContentContainer}>
            <div className={webplayerNavBarLogolinkContainer}>
              <Link className={webplayerNavBarLogolink}></Link>
            </div>
          </nav>
        </div>
        <div className={webplayerPlayBar}>
          <footer className={webplayerPlayBarFooter}>
            <div className={webplayerPlayBarContentContainer}>
              <div className={webplayerPlaybarLeft}></div>
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
                    {/* repeat below <section> for rows of collections */}
                    <section className={PlaylistCollection}>
                      {/* extra divs with formatting */}
                      <div className={PlaylistCollectionGrid}>
                        <h2 className={PlaylistCollectionHeader}>
                          <Link className={GenreHeaderLink}>genre title</Link>
                        </h2>
                      </div>
                      <Link className={GenreIndexLink}>
                        <span>See all</span>
                      </Link>
                    </section>
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