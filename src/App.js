import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Userbody from './components/Userbody/Userbody';

function App() {
  return (
    <div className = 'container'>
      <Header></Header>
      <Userbody></Userbody>
    </div>
  );
}

export default App;
