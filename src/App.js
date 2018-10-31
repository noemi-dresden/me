import React, { Component } from 'react';
import salohy from './images/salohy.JPG';
import linkedin from './images/linkedin.svg';
import twitter from './images/twitter.svg';
import medium from './images/medium.svg';
import github from './images/github.svg';
import heart from './images/heart.svg';
import grin from './images/grin.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={salohy} className="App-logo" alt="logo" />  
        <code className="code-type">I'm Salohy & I <img src={heart} className="App-love" /> data <img src={grin} className="App-love" />.</code> 
          <ul>
            <li>
            <a href="https://www.linkedin.com/in/salohy-miarisoa-05906471/">
              <img src={linkedin} className="App-link" alt="linkedIn" />
            </a>
            </li>
            <li>
            <a href="https://medium.com/@salohyprivat">
            <img src={medium} className="App-link" alt="medium" />
            </a>
            </li>
            <li>
            <a href="https://twitter.com/smiarisoa?lang=de">
            <img src={twitter} className="App-link" alt="twitter" />
            </a>
            </li>
            <li>
            <a href="https://github.com/noemi-dresden">
            <img src={github} className="App-link" alt="github" />
            </a>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}

export default App;
