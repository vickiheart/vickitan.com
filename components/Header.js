import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    zIndex: 1,
  },
});

const Header = ({children}) => (
  <header className={css(styles.header)} >
    {children}
  </header>
);

export default Header;
