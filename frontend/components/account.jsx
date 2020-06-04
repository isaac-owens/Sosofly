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
    return (
      <div>
        <header className={splashHeader}>
          <h1 className={splashHeaderLogo}>
            <Link to="/" className={splashHeaderLogoLink}>
              {sosoflyLogo} Sosofly
            </Link>
          </h1>
          <div>
            <p>--- Webplayer Link ---</p>
            <p>--- User Dropdown ---</p>
          </div>
          </header>
        </div>
    ); 
  };
};

export default Account;