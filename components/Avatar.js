import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import vickitan from '../media/vickitan.png';

const styles = StyleSheet.create({
  avatarContainer: {
    overflow: 'hidden',
    width: 75,
    borderRadius: 50
  },
  avatarImage: {
    maxWidth: '100%',
    display: 'block',
  },
});

const Logo = () => (
  <div className={css(styles.avatarContainer)}>
    <img className={css(styles.avatarImage)} src={vickitan} />
  </div>
);

export default Logo;
