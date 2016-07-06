import React from 'react';
import { StyleSheet, css } from 'aphrodite';
const styles = StyleSheet.create({
  panel: {
    padding: '48px',
    height: '100vh',
    background: '#fff',
    //backgroundImage: 'linear-gradient(#000, #fff)',
  },
});

const propTypes = {
  children: React.PropTypes.node,
};

const HeaderPanel = ({ children }) => (
  <div className={css(styles.panel)} >
    {children}
  </div>
);

HeaderPanel.propTypes = propTypes;

export default HeaderPanel;
