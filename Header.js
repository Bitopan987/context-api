import React from 'react';
import { UserContext } from './UserContext';

export class Header extends React.Component {
  static contextType = UserContext;
  render() {
    return (
      <>
        <div className="header">
          <h2>{this.context.name}</h2>
          <img src={this.context.avatar} />
        </div>
      </>
    );
  }
}

export default Header;
