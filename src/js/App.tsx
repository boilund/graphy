import * as React from 'react';
import './App.css';

import Footer from './footer';
import Header from './header';
import Main from './main';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
