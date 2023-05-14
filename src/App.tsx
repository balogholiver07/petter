import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <SimpleButton/>
      <img className='avatar' src="./logo192.png" alt="" />
    </div>
  );
}

function SimpleButton() {
  return (
  <button>I'm a button</button>
  );
}

export default App;

