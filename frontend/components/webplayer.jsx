import React from 'react';

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
        <div></div>
        <div></div>
      </div>
    )
  };
};

export default Webplayer