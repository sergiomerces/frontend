import React from "react";
import logoImg from './assets/img/imagem-p.png';

class App extends React.Component {
  render() {
    return (
      <header>
        <nav id="navbar">
          <div classNeme="nav-brand">
            <img src={logoImg} alt="" />
            <h1>Space Flight News</h1>
            <ul className="nav-list">
              <li><a href="/">Home</a></li>
              <li><a href="/">Trending</a></li>
              <li><a href="/">Categories</a></li>
              <li><a href="/">About us</a></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default App;