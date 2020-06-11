import React from 'react';

let accountUserDropdown = "account-user-dropdown";
let accountUserDropdownMenu = "account-user-dropdown-menu";


class AccountDropdown extends React.Component  {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    }
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick() {
    this.setState({ open: !this.state.open})
  }

  render() {
    return (
      this.state.open ?
      <div onClick={this.handleButtonClick} className={accountUserDropdownMenu}>
        Logout
      </div> :
      <div></div>
    )
  }
}


export default AccountDropdown;


// }
