import React from 'react';
import './App.css';
import Tabs from './components/Tabs'
import logo from './nu.png'

function App() {
  return (
    <div className="container">
      <header>
        <img src={logo} id="logo" />
        <h1 id="greeting">Hi there! My name's Christian, and I'm a software developer.</h1>
      </header>
      <main>
        <Tabs />
      </main>
    </div>
  );
}

export default App;
