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
    let splashHeader = "splash-header-nav";
    let splashHeaderLogo = "splash-header-logo";
    let splashFooter = "splash-footer-nav";
    let splashMain = "splash-main-content";
    let splashMainMessage = "splash-main-message";
    let authLinks = "auth-links";
    let splashImage = "splash-image";

    let sosoflyLogo = <FontAwesomeIcon icon={faCompactDisc} size="1x" />;
    let splashHeaderLogoLink = "splash-header-logo-link";

    return (
      <>
        <header className={splashHeader}>
          <h1 className={splashHeaderLogo}>
            <Link to="/" className={splashHeaderLogoLink}>
              {sosoflyLogo} Sosofly
            </Link>
          </h1>
          <div className={authLinks}>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Log In</Link>
          </div>
        </header>
        <main className={splashMain}>
          <div className={splashMainMessage}>
            <h1>Listening is everything</h1>
            <p>Millions of songs and podcasts. No credit card needed.</p>
            <Link to="/signup">GET SOSOFLY FREE</Link>
          </div>
          <div className={splashImage}>
            <img
              src="assets/hero.png"
              alt="woman wearing headphones looking to the sky"
            />
          </div>
        </main>
        <footer>
          <nav className={splashFooter}>
            <h2>
              <Link to="/" className={splashHeaderLogoLink}>
                {sosoflyLogo} Sosofly
              </Link>
            </h2>
            <p>--- Webplayer Link Here ---</p>
          </nav>
        </footer>
      </>
    );
  }
}

export default Splash;
