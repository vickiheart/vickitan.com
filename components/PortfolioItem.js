require('../styles/core.scss');
import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  item: {
    fontFamily: '-apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemImage: {
    flex: '1 auto',
    textAlign: 'center',
    // fontFamily: '-apple-system, BlinkMacSystemFont, Helvetica, Arial, sans-serif',
    // display: 'flex',
    // alignItems: 'center',
  },
  itemDetails: {
    // maxWidth: '320px',
    marginRight: '32px',
    flex: '1 auto',
    lineHeight: '1.4',
    width: '5%',
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
  flexSeparator: {
    flex: '1 auto',
    width: '25%',
  },
});

class PortfolioItem extends Component {
  render() {
    var { title, summary, imgSrc } = this.props;
    return (
      <div className={css(styles.item)}>
        <div className={css(styles.itemDetails)}>
          <h3 className={css(styles.itemTitle)}>{title}</h3>
          {summary.map((summaryParagraph, idx) => (
              <div key={idx} className={css(styles.summaryParagraph)}>{summaryParagraph}</div>
          ))}
        </div>
        <div className={css(styles.itemImage)}>

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
