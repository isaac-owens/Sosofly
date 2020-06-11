import React from "react";
import { Link } from "react-router-dom";

import SplashHeader from "./splash_header";
import SplashFooter from "./splash_footer";

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

    
    let splashMainHero = "splash-main-hero";  
    let splashMainContent = "splash-main-content";
    let splashMainSection = "splash-main-section";
    let splashMainSectionHeader = "splash-main-section-header";
    let splashMainSectionSubheader = "splash-main-section-subheader"
    let splashMainSignupButton = "splash-main-signup-button";
    
    let splashImage = "splash-image";

    return (
        <div className={splashMainWrapper}>
          <SplashHeader />
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
          <SplashFooter />
        </div>
    );
  }
}

export default Splash;
