import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.logout();
  }

  render() {
    let splashHeader = "splash-header-nav";
    let splashHeaderLogo = "splash-header-logo";
    let splashHeaderLogoLink = "splash-header-logo-link";
    let splashFooter = "splash-footer-nav";
    let accountHeaderNav = "account-header-nav";
    let accountFooterNav = "account-footer-nav";


    let sosoflyLogo = <FontAwesomeIcon icon={faCompactDisc} size="1x" />;

    return (
      <>
        <div>
          <header className={splashHeader}>
            <h1 className={splashHeaderLogo}>
              <Link to="/" className={splashHeaderLogoLink}>
                {sosoflyLogo} Sosofly
              </Link>
            </h1>
            <div className={accountHeaderNav}>
              <p>--- Webplayer Link ---</p>
              <p>--- User Dropdown ---</p>
            </div>
            </header>
          </div>
          <div>
            <h1>--- Main Content Here ---</h1>
          </div>
          <footer className={accountFooterNav}>
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
  };
};

export default Account;