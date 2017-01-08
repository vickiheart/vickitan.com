require('../styles/core.scss');
import React from 'react';

import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  about: {
    fontFamily: '-apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  aboutContainer: {
    fontFamily: '-apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    display: 'flex',
    alignItems: 'center',
  },
  aboutAvatar: {
    backgroundImage: 'url("../media/vickitan.png")',
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

const About = () => (
  <div className={css(styles.about)}>
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

export default About;
