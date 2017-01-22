require('../styles/core.scss');

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { StyleSheet, css } from 'aphrodite/no-important';
import TweenMax from 'gsap';
import ScrollMagic from 'scrollmagic';

import Scroll from 'react-scroll';
const { Link, DirectLink, Element, Events, scroll, scrollSpy } = Scroll;


const styles = StyleSheet.create({
  navigation: {
    position: 'fixed',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    marginLeft: '32px',
    opacity: 0,
    zIndex: 100,
    // '@media (max-width: 600px)': {
    //   flexDirection: 'column',
    //   minHeight: 100,
    // },
  },
  navigationItems: {
    listStyleType: 'none',
    width: '32px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '@media screen and (max-width: 600px)': {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'center',
    },
  },
  navigationItem: {
    height: '32px',
    '@media screen and (max-width: 600px)': {
      marginRight: '12px',
      marginLeft: '12px',
    },
  },
});

function initScrollEffects() {
  const offset = window.innerHeight;

  const tween = TweenMax.to('.Navigation', 1, { css: { opacity: 1 } });
  const controller = new ScrollMagic.Controller();
  const scrollScene = new ScrollMagic.Scene({
    triggerElement: 'header',
    offset: offset + 100,
  }).setTween(tween)
    .addTo(controller);

  const tween2 = TweenMax.to('.Navigation', 1, { css: { opacity: 0 } });
  const controller2 = new ScrollMagic.Controller();
  const scrollScene2 = new ScrollMagic.Scene({
    triggerElement: '#section-n',
    offset: offset / 4,
  }).setTween(tween2)
    .addTo(controller2);
}

class Navigation extends Component {
  componentDidMount() {
    initScrollEffects(findDOMNode(this));
  }

  render() {
    return (
      <nav className="Navigation">
        <ul className={css(styles.navigationItems)}>
          <li className={css(styles.navigationItem)}>
            <Link
              activeClass='NavigationItemLinkActive'
              className="NavigationItem"
              to="section-0"
              spy={true}
              smooth={true}
              duration={500}
              onSetActive={this.props.handleSetActive}>
            </Link>
          </li>
          {
            this.props.portfolioItems.map((item) => {
              return (
                <li key={item.id} className={css(styles.navigationItem)}>
                  <Link
                    activeClass='NavigationItemLinkActive'
                    className="NavigationItem"
                    to={'section-' + (item.id)}
                    spy={true}
                    smooth={true}
                    duration={500}
                    onSetActive={this.props.handleSetActive}>
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
    )
  }
}

Navigation.propTypes = {
  portfolioItems: React.PropTypes.array,
};

export default Navigation;
