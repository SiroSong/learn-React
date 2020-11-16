import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import ClassChild from './components/ClassChild';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <span className="App-link">000000</span>
//         <ClassChild />
//       </header>
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <span className="App-link">000000</span>
          <ClassChild>
            <span>123</span>
            <span>456</span>
          </ClassChild>
        </header>
      </div>
    )
  }
}

export default App;
