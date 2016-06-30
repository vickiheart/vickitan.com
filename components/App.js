require('../styles/core.scss');
import React, { Component } from "react";
import Logo from './Logo';
import Panel from './Panel';

const App = () => (
  <Panel>
    <Logo />
  </Panel>
);

export default App;
