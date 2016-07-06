require('../styles/core.scss');
import React from 'react';
import HeaderPanel from './HeaderPanel';
import Panel from './Panel';
import Header from './Header';
import Logo from './Logo';
import Avatar from './Avatar';
import Wave from './Wave';

const App = () => (
  <div>
    <HeaderPanel>
      <Header>
        <Logo />
        <Avatar />
      </Header>
      <Wave />
    </HeaderPanel>
    <Panel>
      <p>Currently product design at Lyft</p>
      <p>Previously experiments at Google and research at Stanford.</p>
    </Panel>
    <Panel>
      <h3>Ride experience</h3>
      <p>
        Designed the passenger ride experience, including the matching screen,
        contextual panel and drop-off.
      </p>
    </Panel>
    <Panel>
      <h3>Rating and payment</h3>
      <p>
        Designed the  experience, including 3D maps interaction at drop off,
        driver rating and payment.
      </p>
    </Panel>
  </div>
);

export default App;
