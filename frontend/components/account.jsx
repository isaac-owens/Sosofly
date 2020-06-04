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
    let accountHeader = "account-header-nav";
    let splashHeaderLogo = "splash-header-logo";
    let splashHeaderLogoLink = "splash-header-logo-link";
    let accountNavLinks = "account-nav-links";
    let accountMain = "account-main"
    let accountFooter = "account-footer-nav";


    let sosoflyLogo = <FontAwesomeIcon icon={faCompactDisc} size="1x" />;

    return (
      <>
        <div>
          <header className={accountHeader}>
            <h1 className={splashHeaderLogo}>
              <Link to="/" className={splashHeaderLogoLink}>
                {sosoflyLogo} Sosofly
              </Link>
            </h1>
            <div className={accountNavLinks}>
              <p>--- Webplayer Link ---</p>
              <p>--- User Dropdown ---</p>
            </div>
          </header>
        </div>
        <div className={accountMain}>
          <h1>--- Main Content Here ---</h1>
        </div>
        <footer>
          <nav className={accountFooter}>
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