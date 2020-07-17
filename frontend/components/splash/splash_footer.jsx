import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSpotify } from "@fortawesome/free-regular-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobeAfrica } from "@fortawesome/free-solid-svg-icons";


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
let disclaimer = "disclaimer";

let sosoflyFooterLogo = <FontAwesomeIcon icon={faCompactDisc} size="3x" />;
// let github = <FontAwesomeIcon icon={faGithub} size="1x" />;
// let linkedin = <FontAwesomeIcon icon={faLinkedin} size="1x" />;
// let spotify = <FontAwesomeIcon icon={faSpotify} size="1x" />;
let github = <FontAwesomeIcon icon={faGithub} size="2x" />;
let linkedin = <FontAwesomeIcon icon={faLinkedin} size="2x" />;
let globe = <FontAwesomeIcon icon={faGlobeAfrica} size="2x" />;

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
                  <span className={socialIconInnerBox}>
                    <a
                      href="https://www.github.com/isaac-owens"
                      target="_blank"
                    >
                      {github}
                    </a>
                  </span>
                </div>
              </li>
              <li className={socialIcon}>
                <div className={socialIconOuterBox}>
                  <span className={socialIconInnerBox}>
                    <a
                      href="https://www.linkedin.com/in/isaac-owens-3a279532/"
                      target="_blank"
                    >
                      {linkedin}
                    </a>
                  </span>
                </div>
              </li>
              <li className={socialIcon}>
                <div className={socialIconOuterBox}>
                  <span className={socialIconInnerBox}>
                    <a href="https://www.isaac-owens.com" target="_blank">
                      {globe}
                    </a>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <p className={disclaimer}>
          Created by: Isaac Owens 2020, I do not own the rights to this music,
          this site is not for commerical use. Enjoy!
        </p>
      </footer>
    );
  }
}

export default SplashFooter;