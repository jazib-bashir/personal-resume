import React from 'react';
import Home from './components/home/home';
import Navigation from './components/navigation/navigation';
import Profile from './components/profile/profile';
import Hobies from './components/profile/hobies';
import Resume from './components/resume/resume';

import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <Navigation />
      <Profile />
      <Hobies />
      <Resume />
    </div>
  );
}

export default App;

