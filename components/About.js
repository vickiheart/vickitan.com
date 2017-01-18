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
    width: '200px',
    height: '200px',
    marginRight: '48px',
    flex: '200px 0 0',
  },
  aboutHeader: {
    marginBottom: '16px',
    fontSize: '20px',
  },
  aboutContent: {
    maxWidth: '640px',
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
            <div className={css(styles.aboutContent)}>
              <p>I’m Vicki, a product designer living in San Francisco. I love reading sci-fi, practicing yoga, and going on motorcycle adventures.</p>
              <br/>
              <p>My background is in behavioral psychology at UCSD and I worked in academic research at UCSF and Stanford before making the transition into tech. Following that, I was at Google working on hiring experiments and found my passion for design while building an interview assessment tool. And for the last several years, I’ve been at Lyft on the product design team, helping to shape the passenger ride experience.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
