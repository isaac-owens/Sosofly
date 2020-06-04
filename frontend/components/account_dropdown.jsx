import React from 'react';

class AccountDropdown extends React.Component  {
  constructor(props) {
    super(props)
  }

  
  render() {

    let accountUserDropdownMenu = "account-user-dropdown-menu";
    
    return(
      <div className={accountUserDropdownMenu}>
        Logout
      </div>
    );
  };
}

export default AccountDropdown;