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
    let accountHeader = "account-header";
    let accountHeaderNav = "account-header-nav";
    let splashHeaderLogo = "splash-header-logo";
    let accountHeaderLogoLink = "account-header-logo-link";

    let accountHeaderNavLinks = "account-header-nav-links";
    let accountMain = "account-main"
    let accountMainContent = "account-main-content";
    let profileTable = "profile-table";
    let accountSidebar = "account-sidebar";
    let accountInfo = "account-info";
    let accountWelcome = "account-welcome";
    let accountFooter = "account-footer-nav";

    let accountInfoSection = "account-info-section";
    let accountPlanSection = "account-plan-section";
    let accountPlanHeaderCard = "account-plan-header-card";
    let accountPlanHeader = "account-plan-header";
    let accountPlanBodyCard = "account-plan-body-card";
    let planDescription = "plan-description";
    let paymentInfo = "payment-info";
    let cardInfo = "card-info";
    let editProfileLink = "edit-profile-link";

    let sosoflyLogo = <FontAwesomeIcon icon={faCompactDisc} size="2x" />;

    return (
      <>
        <div>
          <header className={accountHeader}>
            <nav className={accountHeaderNav}>
              <h1 className={splashHeaderLogo}>
                <Link to="/">
                  <div className={accountHeaderLogoLink}>
                    <span>{sosoflyLogo}</span>
                    <span>Sosofly</span>
                  </div>
                </Link>
              </h1>
              <div className={accountHeaderNavLinks}>
                <p>--- Webplayer Link ---</p>
                <p>--- User Dropdown ---</p>
              </div>
            </nav>
          </header>
        </div>

        <div className={accountMain}>

          <div className={accountWelcome}>
            <h1>Welcome {this.props.currentUser.username}</h1>
          </div>

          <main className={accountMainContent}>
            <aside className={accountSidebar}>
              <a href="#">
                <h1>--- Link ---</h1>
              </a>
              <a href="#">
                <h1>--- Link ---</h1>
              </a>
              <a href="#">
                <h1>--- Link ---</h1>
              </a>
              <a href="#">
                <h1>--- Link ---</h1>
              </a>
              <a href="#">
                <h1>--- Link ---</h1>
              </a>
              <a href="#">
                <h1>--- Link ---</h1>
              </a>
              <a href="#">
                <h1>--- Link ---</h1>
              </a>
              <a href="#">
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
                <div className={editProfileLink}>
                  --- Edit Profile Link ---
                </div>
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
                    <p>Enjoy Sosofly free. No ads, no emails, just the flyest music at no cost.</p>
                  </div>
                  <div className={paymentInfo}>
                    <h3>Payment</h3>
                    <div>Your next bill is never.</div>
                    <div className={cardInfo}>
                      <div>
                        Your card info here
                      </div>
                      <div>
                        Expires: never
                      </div>
                    </div>
                  </div>
                </div>
              </section>

            </article>
          </main>
        </div>
        <footer>
          <nav className={accountFooter}>
            <h2>
              <Link to="/">
                <div className={accountHeaderLogoLink}>
                  <span>{sosoflyLogo}</span>
                  <span>Sosofly</span>
                </div>
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