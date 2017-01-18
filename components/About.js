require('../styles/core.scss');
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { StyleSheet, css } from 'aphrodite/no-important';
import TweenMax from 'gsap';
import ScrollMagic from 'scrollmagic';


const styles = StyleSheet.create({
  about: {
    fontFamily: '-apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    opacity: 0,
  },
  aboutContainer: {
    fontFamily: '-apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    display: 'flex',
    alignItems: 'center',
  },
  aboutAvatar: {
    backgroundImage: 'url("./media/vickitan.png")',
    backgroundSize: 'cover',
    borderRadius: '50%',
    width: '120px',
    height: '120px',
    marginRight: '32px',
    flex: '120px 0 0',
  },
  aboutHeader: {
    marginBottom: '16px',
    fontSize: '20px',
  },
  aboutContent: {
    maxWidth: '496px',
    color: '#999',
    lineHeight: '1.4',
  },
});

function initScrollEffects() {
  const offset = window.innerHeight/4;
  const tween = TweenMax.to('#about', 1, { css: { opacity: 1 } });
  const controller = new ScrollMagic.Controller();
  const scrollScene = new ScrollMagic.Scene({
    triggerElement: '#about',
    offset: offset,
  }).setTween(tween)
    .addTo(controller);
}

class About extends Component {
  componentDidMount() {
    initScrollEffects(findDOMNode(this));
  }

  render() {
    return (
      <div id="about" className={css(styles.about)}>
        <div className={css(styles.aboutContainer)}>
          <div className={css(styles.aboutAvatar)}>
          </div>
          <div>
            <div className={css(styles.aboutHeader)}>Hi friends!</div>
            <div className={css(styles.aboutContent)}>I’m Vicki, a product designer living in San Franciso.<br/>
      Right now, I’m big into reading sci-fi, learning to do yoga inversions,  and riding motorcycles at the slowest speed posible.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
