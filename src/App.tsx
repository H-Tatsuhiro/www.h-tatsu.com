import React from 'react';
import logo from './main_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          H.Tatsuhiro (Tatsuhiro Hashimoto)
        </p>
        <a
          className="App-link"
          href="https://github.com/H-Tatsuhiro"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

      </header>
    </div>
  );
}

export default App;
