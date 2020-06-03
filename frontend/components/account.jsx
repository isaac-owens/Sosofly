import React from 'react';
import { Link } from 'react-router-dom';

class Account extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  // componentDidMount() {
  //   this.props.receiveCurrentUser(this.props.currentUser);
  // }

  handleClick() {
    this.props.logout();
  }

  render() {
    return (
      <>
      <h1>Hello {this.props.currentUser.username}!</h1>
      <Link to="/">Home</Link>
      <button onClick={this.handleClick}>LOG OUT</button>
      </>
    ) 
  };
};

export default Account;