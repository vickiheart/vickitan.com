import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  iphoneContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  iphoneFixed: {
    position: 'fixed',
    bottom: '-96px',
  },
  iphoneImage: {
    display: 'block',
    maxWidth: '420px',
    width: 'auto',
    height: 'auto',
    // boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
  },
  iphoneScreenVideo: {
    position: 'fixed',
    maxWidth: '300px',
    width: 'auto',
    height: 'auto',
    top: '160px',
    left: '570px',
    border: '3px solid #000',
  }
});


import iphoneSvg from '../media/iphoneSvg.svg';

const Iphone = () => (
  <div className={css(styles.iphoneContainer)}>
    <div className={css(styles.iphoneFixed)}>
      <img className={css(styles.iphoneImage)} src={iphoneSvg} />
      <video
        className={css(styles.iphoneScreenVideo)}
        src='../media/videos/rating_payment.mov'
        autoPlay
        loop
      >

      </video>
    </div>

  </div>

);

export default Iphone;
