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

    let splashFooter = "splash-footer"
    let splashFooterNav = "splash-footer-nav";

    let splashMain = "splash-main-content";
    let splashMainMessage = "splash-main-message";
    let authLinks = "auth-links";
    let splashImage = "splash-image";

    let sosoflyHeaderLogo = <FontAwesomeIcon icon={faCompactDisc} size="1x" />;
    let sosoflyFooterLogo = <FontAwesomeIcon icon={faCompactDisc} size="3x" />;

    return (
      <>
        <header className={splashHeader}>
          <div className={splashHeaderNav}>
            <h1>
              <Link to="/">
                {sosoflyHeaderLogo} Sosofly
              </Link>
            </h1>
            <div className={authLinks}>
              <Link to="/signup">Signup</Link>
              <Link to="/login">Log In</Link>
            </div>
          </div>
        </header>

        <main className={splashMain}>
          <div className={splashMainMessage}>
            <section>
              <h1>Listening is everything</h1>
              <p>Millions of songs and podcasts. No credit card needed.</p>
              <Link to="/signup">GET SPOTIFY FREE</Link>
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
              <Link to="/">
                {sosoflyFooterLogo} Sosofly
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
