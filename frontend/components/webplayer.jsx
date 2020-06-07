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
    
    return (
      <div className={webplayerTopContainer}>
        <div className={webplayerTopBar}>
          <header className={webplayerTopBarHeader}>
            <div className={webplayerTopBarOuterTransition}>
              <div className={webplayerTopBarInnerTransition}></div>
            </div>
            <div className={webplayerTopBarHeaderNavLinks}>
              <button>
                back icon here
              </button>
              <button>
                forward icon here
              </button>
            </div>
          </header>
        </div>
        <div className={webplayerNavBar}>
          <nav className={webplayerNavBarContentContainer}>
            <div className={webplayerNavBarLogolinkContainer}>
              <Link className={webplayerNavBarLogolink}>
              </Link>
            </div>
          </nav>
        </div>
        <div className={webplayerPlayBar}>
          <footer className={webplayerPlayBarFooter}>
            <div className={webplayerPlayBarContentContainer}></div>
          </footer>
        </div>
      </div>
    )
  };
};

export default Webplayer