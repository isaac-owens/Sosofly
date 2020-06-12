import React from 'react';
import { withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";



class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.container = React.createRef();
    this.state = {
      open: false,
    };
    this.handleLogout = this.handleLogout.bind(this);
    this.handleRedirect = this.handleRedirect.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleRedirect() {
    return this.props.history.push("/account/overview");
  }

  handleLogout() {
    this.props.logout();
  }

  handleButtonClick() {
    this.setState({ open: !this.state.open });
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside());
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside());
  }

  handleClickOutside() {
    return (e) => {
      if (
        this.container.current &&
        !this.container.current.contains(e.target)
      ) {
        this.setState({ open: false });
      }
    };
  }

  render() {
    let webplayerTopBar = "webplayer-top-bar";
    let webplayerTopBarHeader = "webplayer-top-bar-header";
    let webplayerTopBarOuterTransition = "webplayer-top-bar-outer-transition";
    let webplayerTopBarInnerTransition = "webplayer-top-bar-inner-transition";
    let webplayerTopBarHeaderNavLinks = "webplayer-top-bar-header-nav-links";
    let webplayerTopBarHeaderNavButton = "webplayer-top-bar-header-nav-button";
    let webplayerTopBarUserDropdown = "webplayer-top-bar-user-dropdown";
    let webplayerTopBarUserButton = "webplayer-top-bar-user-button";
    let webplayerTopBarIconBoxContainer =
      "webplayer-top-bar-icon-box-container";
    let webplayerTopBarIconCircleContainer =
      "webplayer-top-bar-icon-circle-container";
    let webplayerTopBarUsername = "webplayer-top-bar-username";
    let webplayerTopBarIcon = "webplayer-top-bar-icon";
    
    let webplayerDropdownMenuContainer = "webplayer-dropdown-menu-container";
    let webplayerUserDropdownMenu = "webplayer-topbar-user-dropdown-menu";
    let webplayerDropdownOption = "webplayer-dropdown-option";

    let chevronLeft = <FontAwesomeIcon icon={faChevronLeft} size="2x" />;
    let chevronRight = <FontAwesomeIcon icon={faChevronRight} size="2x" />;
    let userIcon = <FontAwesomeIcon icon={faUser} size="1x" />;
    let triangleDown = <FontAwesomeIcon icon={faCaretDown} size="1x" />;
    let triangleUp = <FontAwesomeIcon icon={faCaretDown} size="1x" />;

    return (
      <div className={webplayerTopBar}>
        <header className={webplayerTopBarHeader}>
          <div className={webplayerTopBarOuterTransition}>
            <div className={webplayerTopBarInnerTransition}></div>
          </div>
          <div className={webplayerTopBarHeaderNavLinks}>
            <button
              className={webplayerTopBarHeaderNavButton}
              onClick={() => this.props.history.goBack()}
            >
              {chevronLeft}
            </button>
            <button
              className={webplayerTopBarHeaderNavButton}
              onClick={() => this.props.history.goForward()}
            >
              {chevronRight}
            </button>
          </div>
          <div className={webplayerTopBarUserDropdown}>
            <button
              className={webplayerTopBarUserButton}
              onClick={this.handleButtonClick}
              ref={this.container}
            >
              {this.state.open ? (
                <div className={webplayerDropdownMenuContainer}>
                  <ul className={webplayerUserDropdownMenu}>
                    <li
                      className={webplayerDropdownOption}
                      onClick={this.handleRedirect}
                    >
                      Account
                    </li>
                    <li className={webplayerDropdownOption}>Profile</li>
                    <li
                      className={webplayerDropdownOption}
                      onClick={this.handleLogout}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
              <figure className={webplayerTopBarIconBoxContainer}>
                <div className={webplayerTopBarIconCircleContainer}>
                  {userIcon}
                </div>
              </figure>
              <span className={webplayerTopBarUsername}>
                {this.props.currentUser.username}
              </span>
              {this.state.open ? (
                <span className={webplayerTopBarIcon}>{triangleUp}</span>
              ) : (
                <span className={webplayerTopBarIcon}>{triangleDown}</span>
              )}
            </button>
          </div>
        </header>
        <div></div>
      </div>
    );
  }
}

export default withRouter(TopBar);