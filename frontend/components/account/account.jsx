import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import AccountDropdown from './account_dropdown';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleClick() {
    this.props.logout();
  }

  handleButtonClick() {
    this.setState({ open: !this.state.open });
  }

  render() {
    let sosoflyLogo = <FontAwesomeIcon icon={faCompactDisc} size="2x" />;
    let userIcon = <FontAwesomeIcon icon={faUserCircle} size="3x" />;
    let arrowDown = <FontAwesomeIcon icon={faAngleDown} size="1x" />;

    let accountHeader = "account-header";
    let accountHeaderNav = "account-header-nav";
    let accountLogoLink = "account-logo-link";
    let accountHeaderNavLinks = "account-header-nav-links";
    let webplayerLink = "webplayer-link";

    let accountUserDropdown = "account-user-dropdown";
    let accountUserDropdownMenu = "account-user-dropdown-menu";
    let accountWelcome = "account-welcome";
    let welcomeMessage = "welcome-message";

    let accountMain = "account-main";
    let accountMainContent = "account-main-content";
    let profileTable = "profile-table";
    let data = "data";

    let accountSidebar = "account-sidebar";
    let sidebarLink = "sidebar-link";

    let accountInfo = "account-info";
    let accountInfoSection = "account-info-section";

    let accountPlanSection = "account-plan-section";
    let accountPlanHeaderCard = "account-plan-header-card";
    let accountPlanHeader = "account-plan-header";
    let accountPlanBodyCard = "account-plan-body-card";
    let planDescription = "plan-description";
    let paymentInfo = "payment-info";
    let cardInfo = "card-info";
    let editProfileLink = "edit-profile-link";

    let accountFooterNav = "account-footer-nav";
    let accountFooterNavLinks = "account-footer-nav-links";

    return (
      <>
        <div>
          <header className={accountHeader}>
            <nav className={accountHeaderNav}>
              <h1>
                <Link to="/">
                  <div className={accountLogoLink}>
                    <span>{sosoflyLogo}</span>
                    <span>Sosofly</span>
                  </div>
                </Link>
              </h1>
              <div className={accountHeaderNavLinks}>
                <div>
                  <Link to="/webplayer" className={webplayerLink}>
                    Webplayer
                  </Link>
                </div>
                <div
                  onClick={this.handleButtonClick}
                  className={accountUserDropdown}
                >
                  <div>{userIcon}</div>
                  <div>Profile</div>
                  <div>{arrowDown}</div>
                  {this.state.open ? (
                    <div className={accountUserDropdownMenu}>Logout</div>
                  ) : (
                    <div></div>
                  )}
                </div>
              </div>
            </nav>
          </header>
        </div>

        <div className={accountMain}>
          <div className={accountWelcome}>
            <div className={welcomeMessage}>
              <h1>Welcome {this.props.currentUser.username}</h1>
              <p>All music. No hassle.</p>
            </div>
          </div>

          <main className={accountMainContent}>
            <aside className={accountSidebar}>
              <a href="#" className={sidebarLink}>
                <h1>--- Link ---</h1>
              </a>
              <a href="#" className={sidebarLink}>
                <h1>--- Link ---</h1>
              </a>
              <a href="#" className={sidebarLink}>
                <h1>--- Link ---</h1>
              </a>
              <a href="#" className={sidebarLink}>
                <h1>--- Link ---</h1>
              </a>
              <a href="#" className={sidebarLink}>
                <h1>--- Link ---</h1>
              </a>
              <a href="#" className={sidebarLink}>
                <h1>--- Link ---</h1>
              </a>
              <a href="#" className={sidebarLink}>
                <h1>--- Link ---</h1>
              </a>
            </aside>

            <article className={accountInfo}>
              <h1> Account Overview </h1>

              <section className={accountInfoSection}>
                <h3>Profile</h3>
                <table className={profileTable}>
                  <tbody>
                    <tr>
                      <td>
                        <span>Email</span>
                      </td>
                      <td>
                        <p className={data}>{this.props.currentUser.email}</p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Date of birth</span>
                      </td>
                      <td>
                        <p className={data}>
                          {this.props.currentUser.birthdate}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Country</span>
                      </td>
                      <td>
                        <p className={data}>US</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className={editProfileLink}>--- Edit Profile Link ---</div>
              </section>

              <section className={accountPlanSection}>
                <h3>Your plan</h3>
                <div className={accountPlanHeaderCard}>
                  <div className={accountPlanHeader}>
                    <span>Sosofly Free</span>
                  </div>
                  <div></div>
                </div>
                <div className={accountPlanBodyCard}>
                  <div className={planDescription}>
                    <p>
                      Enjoy Sosofly free. No ads, no emails, just the flyest
                      music at no cost.
                    </p>
                  </div>
                  <div className={paymentInfo}>
                    <h3>Payment</h3>
                    <div>Your next bill is never.</div>
                    <div className={cardInfo}>
                      <div>Your card info here</div>
                      <div>Expires: never</div>
                    </div>
                  </div>
                </div>
              </section>
            </article>
          </main>
        </div>
        <footer className={accountFooterNav}>
          <nav>
            <div className={accountFooterNavLinks}>
              <h2>
                <Link to="/">
                  <div className={accountLogoLink}>
                    <span>{sosoflyLogo}</span>
                    <span>Sosofly</span>
                  </div>
                </Link>
              </h2>
              <div>
                <Link to="/webplayer" className={webplayerLink}>
                  Webplayer
                </Link>
              </div>
            </div>
          </nav>
        </footer>
      </>
    );
  }
};

export default Account;