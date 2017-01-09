require('../styles/core.scss');

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { StyleSheet, css } from 'aphrodite';
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
  },
  navigationItem: {
    height: '36px',
  },
  navigationItemLink: {
    display: 'block',
    marginTop: '12px',
    marginBottom: '12px',
    cursor: 'pointer',
    background: '#333',
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    transition: 'all ease-in 0.14s',
  },
  navigationItemLinkActive: {
    width: '12px',
    height: '12px',
  },
});

function initScrollEffects() {
  const offset = window.innerHeight;
  const tween = TweenMax.to('.Navigation', 1, { css: { opacity: 1 } });
  const controller = new ScrollMagic.Controller();
  const scrollScene = new ScrollMagic.Scene({
    triggerElement: 'header',
    offset: offset + 300,
  }).setTween(tween)
    .addTo(controller);
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
