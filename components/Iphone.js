import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { StyleSheet, css } from 'aphrodite/no-important';

import TweenMax from 'gsap';
import ScrollMagic from 'scrollmagic';

import iphoneSvg from '../media/iphoneSvg.svg';

const styles = StyleSheet.create({
  iphoneContainer: {
    opacity: 0,
    '@media screen and (max-width: 600px)': {
      display: 'none',
    },
  },
  iphoneFixed: {
    position: 'fixed',
    bottom: '-96px',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  iphoneImage: {
    display: 'block',
    maxWidth: '420px',
    width: 'auto',
    height: 'auto',
    // boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
  },
  iphoneScreenVideo: {
    position: 'absolute',
    top: '0',
    left: '0',
    maxWidth: '300px',
    width: 'auto',
    height: 'auto',
    border: '2px solid #000',
    marginBottom: '120px',
    transition: 'all 0.36s ease-in',
    transform: 'translateY(24px)',
    opacity: 0,
  },
  videoContainerRelative: {
    position: 'relative',
    width: '300px',
    height: '652px',
  }
});

function initScrollEffects() {
  const offset = window.innerHeight * 2;
  const tween = TweenMax.to('#iphoneContainer', 1, { css: { opacity: 1 } });
  const controller = new ScrollMagic.Controller();
  const scrollScene = new ScrollMagic.Scene({
    triggerElement: 'header',
    offset: offset + 300,
  }).setTween(tween)
    .addTo(controller);
}

class Iphone extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeVideoId: 0
    }
  }

  componentDidMount() {
    initScrollEffects(findDOMNode(this));
  }

  componentDidUpdate() {
    this.props.portfolioItems.forEach((item) => {
      console.log(this[`video${item.id}`]);
      if (this.state.activeVideoId === item.id) {
        this[`video${item.id}`].classList.add('iphoneScreenVideoActive');
        if (this[`video${item.id}`].canplay) {
          this[`video${item.id}`].play()
        } else {
          console.log('cannot play');
          setTimeout(() => this[`video${item.id}`].play(), 100);
        }
      } else {
        this[`video${item.id}`].classList.remove('iphoneScreenVideoActive');
        this[`video${item.id}`].pause();
      }
    })
  }

  handleChangeVideo = (vId) => {
    this.setState({
      activeVideoId: vId,
    })
  }

  render() {
    const { portfolioItems } = this.props;
    return (
      <div id='iphoneContainer' className={css(styles.iphoneContainer)}>
        <div className={css(styles.iphoneFixed)}>
          <img className={css(styles.iphoneImage)} src={iphoneSvg} />
        </div>
        <div className={css(styles.iphoneFixed)}>
          <div className={css(styles.videoContainerRelative)}>
            {
              portfolioItems.map((item) => {
                return (
                  <video
                    key={item.id}
                    ref={(node) => this[`video${item.id}`] = node}
                    className={css(styles.iphoneScreenVideo)}
                    loop
                  >
                    <source src={item.videoSrcMov} type='video/mp4'/>
                    Your browser does not support the video tag.
                  </video>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

// '../media/videos/rating_payment.mov'

export default Iphone;
