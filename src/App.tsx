import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let images = [];
  for (let i = 0; i < 10; i++) {
    images.push(<img alt="random" key={i} src={`https://picsum.photos/200/300?random=${i}`} />);
  }

  return (
    <div className="App App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <button onClick={notifyMe}>Notify me</button>

      <main>
        {images}
      </main>
    </div>
  );
}

export default App;
