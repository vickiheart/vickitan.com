import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { StyleSheet, css } from 'aphrodite/no-important';

import TweenMax from 'gsap';
import ScrollMagic from 'scrollmagic';

import iphoneSvg from './media/iphone.svg';

const styles = StyleSheet.create({
  iphoneContainer: {
    opacity: 0,
    '@media screen and (max-width: 600px)': {
      display: 'none',
    },
  },
  iphoneFixed: {
    position: 'fixed',
    top: '50%',
    left: '60%',
    transform: 'translate(-50%, -50%)',
  },
  iphoneScreenFixed: {
    position: 'fixed',
    top: '60%',
    left: '60%',
    transform: 'translate(-50%, -50%)',
  },
  iphoneImage: {
    display: 'block',
    maxWidth: '520px',
    width: 'auto',
    height: 'auto',
    // boxShadow: '2px 2px 2px 1px rgba(0, 0, 0, 0.2)',
  },
  iphoneScreenVideo: {
    position: 'absolute',
    top: '0',
    left: '0',
    maxWidth: '380px',
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
    width: '380px',
    height: '812px',
  }
});

function initScrollEffects() {
  const offset = window.innerHeight * 2;

  const tweenIn = TweenMax.to('#iphoneContainer', 1, { css: { opacity: 1 } });
  const tweenOut = TweenMax.to('#iphoneContainer', 1, { css: { opacity: 0 } });

  const controller = new ScrollMagic.Controller();
  const scrollScene = new ScrollMagic.Scene({
    triggerElement: 'header',
    offset: offset + 300,
  }).setTween(tweenIn)
    .addTo(controller);

  const controller2 = new ScrollMagic.Controller();
  const scrollScene2 = new ScrollMagic.Scene({
    triggerElement: '#section-n',
    offset: offset / 8,
  }).setTween(tweenOut)
    .addTo(controller2);
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
      if (this.state.activeVideoId === item.id) {
        this[`video${item.id}`].classList.add('iphoneScreenVideoActive');
        this[`video${item.id}`].currentTime = 0;
        if (this[`video${item.id}`].canplay) {
          this[`video${item.id}`].play()
        } else {
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
        <div className={css(styles.iphoneScreenFixed)}>
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
                    <source src={item.videoSrcWebm} type='video/webm'/>
                    <source src={item.videoSrcMp4} type='video/mp4'/>
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

// './media/videos/rating_payment.mov'

export default Iphone;
