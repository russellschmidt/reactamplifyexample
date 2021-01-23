import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Auth } from 'aws-amplify';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => Auth.federatedSignIn({
          provider: "Facebook"
        })}>Sign in with Facebook</button>
        <button onClick={() => Auth.federatedSignIn()}>Sign In</button>
      </header>
    </div>
  );
}

export default App;
