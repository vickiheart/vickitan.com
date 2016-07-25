require('../styles/core.scss');
import React from 'react';
import HeaderPanel from './HeaderPanel';
import Header from './Header';
import Logo from './Logo';
import Wave from './Wave';
import SocialLinks from './SocialLinks';

const App = () => (
  <HeaderPanel>
    <Header>
      <Logo />
      <SocialLinks />
    </Header>
    <Wave />
  </HeaderPanel>
);

export default App;
