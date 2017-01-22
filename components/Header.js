import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    alignItems: 'center',
    padding: '48px',
    zIndex: 1,
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      minHeight: 100,
    },
  },
});

const Header = ({ children }) => (
  <header className={css(styles.header)} >
    {children}
  </header>
);

Header.propTypes = {
  children: React.PropTypes.node,
};

export default Header;
