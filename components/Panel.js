import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  panel: {
    padding: '24px',
    height: '100vh',
  },
});

const Panel = ({children}) => (
  <div className={css(styles.panel)} >
    {children}
  </div>
);

export default Panel;
