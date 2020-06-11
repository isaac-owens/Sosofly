import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGitbhub } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-solid-svg-icons";
import { faSpotify } from "@fortawesome/free-solid-svg-icons";

import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";

let splashFooter = "splash-footer";
let splashFooterNav = "splash-footer-nav";
let footerLink = "footer-link";
let footerWebplayerLink = "footer-webplayer-link";
let footerLogoBox = "footer-logo-box";
let footerLinksBoxes = "footer-links-boxes";
let footerLinksBox = "footer-links-box";
let boxHeader = "box-header";
let boxItem = "box-item";
let socialBox = "social-box";
let socialIcons = "social-icons";
let socialIcon = "social-icon";
let socialIconOuterBox = "social-icon-outer-box";
let socialIconInnerBox = "social-icon-inner-box";

let sosoflyFooterLogo = <FontAwesomeIcon icon={faCompactDisc} size="3x" />;
let github = <FontAwesomeIcon icon={faGitbhub} size="1x" />;
let linkedin = <FontAwesomeIcon icon={faLinkedin} size="1x" />;
let spotify = <FontAwesomeIcon icon={faSpotify} size="1x" />;

class SplashFooter extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <footer className={splashFooter}>
        <nav className={splashFooterNav}>
          <div className={footerLogoBox}>
            <Link to="/" className={footerLink}>
              {sosoflyFooterLogo} Sosofly
            </Link>
          </div>
          <div className={footerLinksBoxes}>
            <ul className={footerLinksBox}>
              <li className={boxHeader}>company</li>
              <li className={boxItem}>About</li>
              <li className={boxItem}>Jobs</li>
              <li className={boxItem}>For the Record</li>
            </ul>
            <ul className={footerLinksBox}>
              <li className={boxHeader}>communities</li>
              <li className={boxItem}>For Artists</li>
              <li className={boxItem}>Developers</li>
              <li className={boxItem}>Brands</li>
              <li className={boxItem}>Investors</li>
              <li className={boxItem}>Vendors</li>
            </ul>
            <ul className={footerLinksBox}>
              <li className={boxHeader}>useful links</li>
              <li className={boxItem}>Help</li>
              <li>
                <Link to="/webplayer" className={footerWebplayerLink}>
                  Webplayer
                </Link>
              </li>
              <li className={boxItem}>Free Mobile App</li>
            </ul>
          </div>
          <div className={socialBox}>
            <ul className={socialIcons}>
              <li className={socialIcon}>
                <div className={socialIconOuterBox}>
                  <div className={socialIconInnerBox}>I</div>
                </div>
              </li>
              <li className={socialIcon}>
                <div className={socialIconOuterBox}>
                  <div className={socialIconInnerBox}>J</div>
                </div>
              </li>
              <li className={socialIcon}>
                <div className={socialIconOuterBox}>
                  <div className={socialIconInnerBox}>O</div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </footer>
    )
  }
}

export default SplashFooter;