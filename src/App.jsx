import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassChild from './components/ClassChild';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link">123123</a>
        <ClassChild />
      </header>
    </div>
  );
}

export default App;
