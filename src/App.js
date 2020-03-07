import React from 'react';
import Home from './components/home/home';
import Navigation from './components/navigation/navigation';
import Profile from './components/profile/profile';
import Hobies from './components/profile/hobies';
import Resume from './components/resume/resume';

import Sticky from 'react-sticky-el';
import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <Sticky style={{backgroundColor: '#FFFFFF', zIndex: '999'}}>
        <Navigation />
      </Sticky>
      <Profile />
      <Hobies />
      <Resume />
    </div>
  );
}

export default App;

