import React from 'react';
import FontAwesome from 'react-fontawesome';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    display: 'flex',
    fontSize: 24,
    width: 150,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

const SocialLink = ({ href, children }) => (
  <a className={css(styles.link)} href={href}>
    {children}
  </a>
);

SocialLink.propTypes = {
  children: React.PropTypes.node,
  href: React.PropTypes.string,
};

const SocialLinks = () => (
  <nav className={css(styles.container)}>
    <SocialLink href="//twitter.com/vickiheart" >
      <FontAwesome name="twitter" />
    </SocialLink>
    <SocialLink href="//dribbble.com/vickiheart">
      <FontAwesome name="dribbble" />
    </SocialLink>
    <SocialLink href="//linkedin.com/in/vickitan">
      <FontAwesome name="linkedin" />
    </SocialLink>
    <SocialLink href="//instagram.com/vickiheart">
      <FontAwesome name="instagram" />
    </SocialLink>
  </nav>
);

export default SocialLinks;
