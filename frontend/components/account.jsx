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
    let accountMainContent = "account-main-content";
    let accountSidebar = "account-sidebar";
    let accountInfo = "account-info";
    let accountWelcome = "account-welcome";
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
          <div className={accountWelcome}>
            <h1>Welcome {this.props.currentUser.username}</h1>
          </div>
          <main className={accountMainContent}>
            <aside className={accountSidebar}>
              <h1>--- Sidebar ---</h1>
              <h1>--- Sidebar ---</h1>
              <h1>--- Sidebar ---</h1>
              <h1>--- Sidebar ---</h1>
              <h1>--- Sidebar ---</h1>
              <h1>--- Sidebar ---</h1>
              <h1>--- Sidebar ---</h1>
              <h1>--- Sidebar ---</h1>
            </aside>
            <article className={accountInfo}>
            <h1> Account Overview </h1>
              <section>
                <h3>Profile</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <span>Email</span>
                      </td>
                      <td>
                        <p>isaac.owens832@gmail.com</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Date of birth</span>
                      </td>
                      <td>
                        <p>10/05/1988</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Country</span>
                      </td>
                      <td>
                        <p>US</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
              <p>--- Edit Profile Link ---</p>
            </article>
          </main>
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