import './App.css';
import firebase from './firebase.js'
import { useState, useEffect } from 'react';
import Navigation from './Navigation.js'
import Main from './Main.js'



function App() {

  return (
    <div className="App">
      <div className="wrapper">
      <Navigation />
      <Main/>
      </div>
    </div>
  );
}

export default App;
