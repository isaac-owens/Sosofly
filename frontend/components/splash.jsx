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
    let splashHeader = "splash-header";
    let splashHeaderNav = "splash-header-nav";
    let headerLogoLink = "header-logo-link";
    let headerLink = "header-link"

    let splashFooter = "splash-footer";
    let splashFooterNav = "splash-footer-nav";
    let footerLink = "footer-link";

    let splashMain = "splash-main";
    let splashMainContent = "splash-main-content";
    let splashMainSection = "splash-main-section";
    let splashMainSectionHeader = "splash-main-section-header";
    let splashMainSectionSubheader = "splash-main-section-subheader"
    let splashMainSignupButton = "splash-main-signup-button";
    let authLinks = "auth-links";
    let splashImage = "splash-image";

    let sosoflyHeaderLogo = <FontAwesomeIcon icon={faCompactDisc} size="1x" />;
    let sosoflyFooterLogo = <FontAwesomeIcon icon={faCompactDisc} size="3x" />;

    return (
      <>
        <header className={splashHeader}>
          <div className={splashHeaderNav}>
            <h1>
              <Link to="/" className={headerLogoLink}>
                {sosoflyHeaderLogo} Sosofly
              </Link>
            </h1>
            <div className={authLinks}>
              <Link to="/signup" className={headerLink}>
                Signup
              </Link>
              <Link to="/login" className={headerLink}>
                Log In
              </Link>
            </div>
          </div>
        </header>

        <main className={splashMain}>
          <div className={splashMainMessage}>
            <h1>Listening is everything</h1>
            <p>Millions of songs and podcasts. No credit card needed.</p>
            <Link to="/signup">GET SOSOFLY FREE</Link>
            </div>
          <div className={splashMainContent}>
            <section className={splashMainSection}>
              <h1 className={splashMainSectionHeader}>
                Listening is everything
              </h1>
              <p className={splashMainSectionSubheader}>
                Millions of songs. No credit card needed.
              </p>

              <Link to="/signup" className={splashMainSignupButton}>
                GET SOSOFLY FREE
              </Link>
            </section>
          </div>

          <div className={splashImage}>
            <img
              src="assets/hero.png"
              alt="woman wearing headphones looking to the sky"
            />
          </div>
        </main>

        <footer className={splashFooter}>
          <nav className={splashFooterNav}>
            <h2>
              <Link to="/" className={footerLink}>{sosoflyFooterLogo} Sosofly</Link>
            </h2> 
            <Link to="#" className={footerLink}>Webplayer</Link>
          </nav>
        </footer>
      </>
    );
  }
}

export default Splash;
