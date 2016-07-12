require('../styles/core.scss');
import React from 'react';
import HeaderPanel from './HeaderPanel';
import Header from './Header';
import Logo from './Logo';
import Wave from './Wave';

const App = () => (
  <HeaderPanel>
    <Header>
      <Logo />
    </Header>
    <Wave />
  </HeaderPanel>
);

export default App;
