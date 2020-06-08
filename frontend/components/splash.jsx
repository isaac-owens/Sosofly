import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";

class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    return dispatch(this.props.logout);
  }

  render() {
    let splashMainWrapper = "splash-main-wrapper";

    let splashHeader = "splash-header";
    let splashHeaderNav = "splash-header-nav";
    let headerLogoLinkWrapper = "header-logo-link-wrapper";
    let headerLogoLink = "header-logo-link";
    let headerLogoLinkTitle = "header-logo-link-title"
    let authLinks = "auth-links";
    let authLinksList = "auth-links-list";
    let authLinksListItem = "auth-links-list-item";
    let separator = "separator";
    
    let splashMainHero = "splash-main-hero";  
    let splashMainContent = "splash-main-content";
    let splashMainSection = "splash-main-section";
    let splashMainSectionHeader = "splash-main-section-header";
    let splashMainSectionSubheader = "splash-main-section-subheader"
    let splashMainSignupButton = "splash-main-signup-button";
    
    let splashImage = "splash-image";
    
    let splashFooter = "splash-footer";
    let splashFooterNav = "splash-footer-nav";
    let footerLink = "footer-link";
    let footerWebplayerLink = "footer-webplayer-link";

    let sosoflyHeaderLogo = <FontAwesomeIcon icon={faCompactDisc} size="3x" />;
    let sosoflyFooterLogo = <FontAwesomeIcon icon={faCompactDisc} size="3x" />;

    return (
      <>
        <div className={splashMainWrapper}>
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
                    <Link to="/webplayer" className={authLinksListItem}>
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
          <main className={splashMainHero}>
            <picture>
              <img
                className={splashImage}
                src={window.heroURL}
                alt="woman wearing headphones looking to the sky"
              />
            </picture>
            <div className={splashMainContent}>
              <section className={splashMainSection}>
                <h1 className={splashMainSectionHeader}>
                  Listening is everything
                </h1>
                <h4 className={splashMainSectionSubheader}>
                  Millions of songs. No credit card needed.
                </h4>
                <Link to="/signup" className={splashMainSignupButton}>
                  GET SOSOFLY FREE
                </Link>
              </section>
            </div>
          </main>
        </div>
        <footer className={splashFooter}>
          <nav className={splashFooterNav}>
            <h2>
              <Link to="/" className={footerLink}>
                {sosoflyFooterLogo} Sosofly
              </Link>
            </h2>
            <Link to="#" className={footerWebplayerLink}>
              Webplayer
            </Link>
          </nav>
        </footer>
      </>
    );
  }
}

export default Splash;
