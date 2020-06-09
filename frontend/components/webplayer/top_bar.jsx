import React from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";




class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
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

    let chevronLeft = <FontAwesomeIcon icon={faChevronLeft} size="2x" />;
    let chevronRight = <FontAwesomeIcon icon={faChevronRight} size="2x" />;
    let userIcon = <FontAwesomeIcon icon={faUser} size="1x" />;
    let triangleDown = <FontAwesomeIcon icon={faCaretDown} size="1x" />;


    return(
      
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
    )
  }
}

export default TopBar;