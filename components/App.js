require('../styles/core.scss');
import React, { Component } from 'react';
import Section from './HeaderPanel';
import Header from './Header';
import Logo from './Logo';
import Wave from './Wave';
import SocialLinks from './SocialLinks';
import About from './About';
import Navigation from './Navigation';
import PortfolioItem from './PortfolioItem';
import Iphone from './Iphone';

import { StyleSheet, css } from 'aphrodite';
// import Scroll, { Link, Element, Events, scroll, scrollSpy } from 'react-scroll';

var Scroll    = require('react-scroll');

var Link       = Scroll.Link;
var DirectLink = Scroll.DirectLink;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

var durationFn = function(deltaTop) {
    return deltaTop;
};

var portfolioItems = [
  {
    id: 1,
    title: 'Lyft: Rating and Payment',
    summary: [
      'The end of your Lyft ride just got a smooth little update to help you complete payment and rate your driver with a few quick taps. I optimized this experience for the most common use case – you had a fine ride and you’re already calling the next one.',
      'The 3D maps drop off view is a completely new one, and was used specifically to give context about the location of your last ride, and to signal that the ride has ended.',
    ],
    imgSrc: './media/rating_payments.png',
    videoSrcMov: './media/videos/rating_payment.mov'
  },
  {
    id: 2,
    title: 'Lyft: Ride Experience',
    summary: [
      'We did a complete refresh of Lyft’s  ride experience.  Rooted in rigorous user testing, this update was targted to solve myriad discoverability, accessibility  and usability concerns. I owned the latter half of the experience, including everything after you hit “Request”.',
      'Highlights:<br/>– Contextual ride panel that surfaces the information about your ride when you most need it.<br/>– Ride actions are ergonomically placed within thumbs reach for easy access.',
    ],
    imgSrc: './media/rideexperience.png',
    videoSrcMov: './media/videos/ride_experience.mov'
  },
  {
    id: 3,
    title: 'Lyft: Dynamic Pin',
    summary: [
      'Created a subtle, fine-tuned interaction for displaying updated ETAs in the location pin. At once, this animation must effectively communicate the most accurate information without calling too much attentiont to the changes in availability.',
    ],
    imgSrc: './media/dynamicpin.png',
    videoSrcMov: './media/videos/dynamic_pin_drop.mov'
  },
  {
    id: 4,
    title: 'Lyft: Ride Receipts',
    summary: [
      'I created a modular email for Lyft email receipts, to help riders quickly identify the ride, understand pricing, and take action if needed. Components include: ride summary, itemized breakdown of price, and promotional cards. ',
    ],
    imgSrc: './media/ride_receipts.png',
    videoSrcMov: './media/videos/ride_receipts.mov'
  },
]


class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItemId: 0,
      activeVideoSrcMov: '',
    }
    this.iphoneNode = null;
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function() {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  handleSetActive(to) {
    const sectionId = parseInt(to.split('-')[1]);
    if (sectionId === 0) {
      this.setState ({
        activeItemId: 0,
        activeVideoSrcMov: ''
      });
    } else {
      const activeItem = portfolioItems.find((item) => item.id === sectionId);
      if (activeItem !== undefined) {
        this.setState ({
          activeItemId: activeItem.id,
          activeVideoSrcMov: activeItem.videoSrcMov
        });
      }
    }
    this.iphoneNode.handleChangeVideo(sectionId);
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <div className="h100p">
        <Navigation
          portfolioItems={portfolioItems}
          handleSetActive={this.handleSetActive.bind(this)}
        />

        <Element className="element">
          <Header>
              <Logo />
              <SocialLinks />
          </Header>
          <Wave />
        </Element>


        <Element name='section-0' className="element pd-left-120px va-center">
          <About />
        </Element>
        {
          portfolioItems.map((item) => {
            return (
              <Element
                key={item.id}
                id={'section-' + (item.id)}
                name={'section-' + (item.id)}
                className="element pd-left-120px va-center"
              >
                <PortfolioItem
                  key={item.id}
                  title={item.title}
                  summary={item.summary}
                  imgSrc={item.imgSrc}
                  videoSrcMov={item.videoSrcMov}
                  parentElementId={'#section-' + (item.id)}
                />
              </Element>
            )
          })
        }
        <Iphone
          portfolioItems={portfolioItems}
          ref={(node) => this.iphoneNode = node}
        />
      </div>
    );
  }
}

const OldPortfolio = () => (
  <Section>
    <Header>
      <Logo />
      <SocialLinks />
    </Header>
    <Wave />
  </Section>
)

const App = () => (
  <div>
    <Portfolio/>

  </div>
);

// <Section id='section-0'>
//   <About />
// </Section>
// {
//   portfolioItems.map((item, idx) => {
//     console.log(item);
//     return (
//       <Section id={'section-' + idx} key={idx}>
//         <PortfolioItem
//           key={idx}
//           title={item.title}
//           summary={item.summary}
//           imgSrc={item.imgSrc}
//         />
//       </Section>
//     )
//   })
// }

export default App;
