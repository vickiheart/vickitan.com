import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { StyleSheet, css } from 'aphrodite';

import TweenMax from 'gsap';
import ScrollMagic from 'scrollmagic';

import iphoneSvg from '../media/iphoneSvg.svg';

const styles = StyleSheet.create({
  iphoneContainer: {
    display: 'flex',
    justifyContent: 'center',
    opacity: 0,
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
    maxWidth: '300px',
    width: 'auto',
    height: 'auto',
    border: '3px solid #000',
    marginBottom: '120px',
  }
});

function initScrollEffects() {
  const offset = window.innerHeight * 2;
  const tween = TweenMax.to('.iphoneContainer', 1, { css: { opacity: 1 } });
  const controller = new ScrollMagic.Controller();
  const scrollScene = new ScrollMagic.Scene({
    triggerElement: 'header',
    offset: offset + 300,
  }).setTween(tween)
    .addTo(controller);
}

class Iphone extends Component {
  componentDidMount() {
    initScrollEffects(findDOMNode(this));
  }

  render() {
    return (
      <div className='iphoneContainer'>
        <div className={css(styles.iphoneFixed)}>
          <img className={css(styles.iphoneImage)} src={iphoneSvg} />
        </div>
        <div className={css(styles.iphoneFixed)}>
          <video
            className={css(styles.iphoneScreenVideo)}
            src={this.props.videoSrcMov}
            autoPlay
            loop
          >
          </video>
        </div>
      </div>
    );
  }
}

// '../media/videos/rating_payment.mov'

export default Iphone;
