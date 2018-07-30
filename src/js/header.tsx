import * as React from 'react';

import logo from './logoAndBrand.png';

class Header extends React.Component {
  public render() {
    return (
      <header className="App-header">
        <img src={logo} alt="logo" />
      </header>
    );
  }
}

export default Header;
