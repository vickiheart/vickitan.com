require('../styles/core.scss');
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { StyleSheet, css } from 'aphrodite/no-important';
import TweenMax from 'gsap';
import ScrollMagic from 'scrollmagic';

const styles = StyleSheet.create({
  item: {
    fontFamily: '-apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0,
    '@media screen and (max-width: 600px)': {
      flexWrap: 'wrap',
    },
  },
  itemImage: {
    flex: '1 auto',
    '@media screen and (max-width: 600px)': {
      width: '100%',
    },
  },
  itemDetails: {
    marginRight: '32px',
    flex: '1 auto',
    lineHeight: '1.4',
    width: '13%',
    '@media screen and (max-width: 600px)': {
      width: '100%',
    },
  },
  itemTitle: {
    marginBottom: '16px',
    fontSize: '20px',
    fontWeight: '400',
  },
  itemSummary: {

  },
  summaryParagraph: {
    marginBottom: '16px',
    color: '#999',
  },
  iphoneScreenVideo: {
    maxWidth: '100%',
    width: 'auto',
    height: 'auto',
    border: '2px solid #000',
    display: 'none',
    '@media screen and (max-width: 600px)': {
      width: '100%',
      display: 'block',
    },
  },
  flexSeparator: {
    flex: '1 auto',
    width: '25%',
  },
});

function initScrollEffects(parentElementId) {
  const offset = window.innerHeight/4;
  const tween = TweenMax.to(parentElementId + ' #item', 1, { css: { opacity: 1 } });
  const controller = new ScrollMagic.Controller();
  const scrollScene = new ScrollMagic.Scene({
    triggerElement: parentElementId,
    offset: offset,
  }).setTween(tween)
    .addTo(controller);
}

function createMarkup(html) {
  return { __html: html }
}

class PortfolioItem extends Component {
  componentDidMount() {
    initScrollEffects(this.props.parentElementId);
  }

  render() {
    var { title, summary, imgSrc, videoSrcWebm, videoSrcMp4 } = this.props;
    return (
      <div id='item' className={css(styles.item)}>
        <div id='details' className={css(styles.itemDetails)}>
          <h3 className={css(styles.itemTitle)}>{title}</h3>
          {summary.map((summaryParagraph, idx) => (
              <p key={idx} className={css(styles.summaryParagraph)} dangerouslySetInnerHTML={createMarkup(summaryParagraph)}>{}</p>
          ))}
        </div>
        <div className={css(styles.itemImage)}>
          <video
            src={videoSrcMp4} type='video/mp4'
            className={css(styles.iphoneScreenVideo)}
            controls
          />
        </div>
        <div className={css(styles.flexSeparator)}>
        </div>
      </div>
    )
  }
}

// <img src={imgSrc} />

PortfolioItem.propTypes = {
  title: React.PropTypes.string,
  summary: React.PropTypes.array,
  imgSrc: React.PropTypes.string,
};

export default PortfolioItem;
