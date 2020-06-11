import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";

let splashHeader = "splash-header";
let splashHeaderNav = "splash-header-nav";
let headerLogoLinkWrapper = "header-logo-link-wrapper";
let headerLogoLink = "header-logo-link";
let headerLogoLinkTitle = "header-logo-link-title";
let authLinks = "auth-links";
let authLinksList = "auth-links-list";
let authLinksListItem = "auth-links-list-item";
let authLinksListWebplayer = "auth-links-list-webplayer";
let separator = "separator";


let sosoflyHeaderLogo = <FontAwesomeIcon icon={faCompactDisc} size="3x" />;

class SplashHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className={splashHeader}>
        <div className={splashHeaderNav}>
          <div className={headerLogoLinkWrapper}>
            <Link to="/" className={headerLogoLink}>
              {sosoflyHeaderLogo}
              <span className={headerLogoLinkTitle}>Sosofly</span>
            </Link>
          </div>
          <nav className={authLinks}>
            <ul className={authLinksList}>
              <li>
                <Link to="/webplayer" className={authLinksListWebplayer}>
                  Webplayer
                </Link>
              </li>
              <li className={authLinksListItem}>Help</li>
              <li className={authLinksListItem}>Download</li>
              <li role="separator" className={separator}></li>
              <li>
                <Link to="/signup" className={authLinksListItem}>
                  Signup
                </Link>
              </li>
              <li>
                <Link to="/login" className={authLinksListItem}>
                  Log In
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
  }
}

export default SplashHeader;