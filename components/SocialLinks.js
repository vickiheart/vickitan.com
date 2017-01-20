import React from 'react';
import FontAwesome from 'react-fontawesome';
import { StyleSheet, css } from 'aphrodite';

import Scroll from 'react-scroll';
const { Link, DirectLink, Element, Events, scroll, scrollSpy, scroller } = Scroll;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    display: 'flex',
    fontSize: 24,
    width: 175,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    cursor: 'pointer',
  },
});

const SocialLink = ({ href, children, handleClick }) => (
  <a
    className={css(styles.link)}
    href={href}
    onClick={handleClick}>
    {children}
  </a>
);

SocialLink.propTypes = {
  children: React.PropTypes.node,
  href: React.PropTypes.string,
};

const SocialLinks = () => (
  <nav className={css(styles.container)}>
    <SocialLink handleClick={() => {
      scroller.scrollTo('section-0', {
          duration: 500,
          delay: 0,
          smooth: true,
      })
    }}>
      <FontAwesome name="heart" />
    </SocialLink>
    <SocialLink handleClick={() => {
      scroller.scrollTo('section-1', {
          duration: 500,
          delay: 0,
          smooth: true,
      })
    }}>
      <FontAwesome name="play" />
    </SocialLink>
    <SocialLink handleClick={() => {
      scroller.scrollTo('section-n', {
          duration: 500,
          delay: 0,
          smooth: true,
      })
    }}>
      <FontAwesome name="mouse-pointer" />
    </SocialLink>
  </nav>
);

export default SocialLinks;
