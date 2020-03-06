import React from 'react';
import Home from './components/home/home';
import Navigation from './components/navigation/navigation';
import Porfile from './components/profile/profile';

import './App.css';
import Profile from './components/profile/profile';

function App() {
  return (
    <div className="App">
      <Home />
      <Navigation />
      <Profile />
    </div>
  );
}

export default App;

