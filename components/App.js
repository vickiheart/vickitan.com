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
      'A new way to take care of feedback, payment and tipping with a couple quick taps. Optimized for the most common use case – the ride was just fine and you’re read to call your next  ride.',
      'The 3D map view and lightweight cards give context for where you were last dropped off, and signal that the ride has ended.',
    ],
    imgSrc: '../media/rating_payments.png',
    videoSrcMov: '../media/videos/rating_payment.mov'
  },
  {
    id: 2,
    title: 'Lyft: Ride Experience',
    summary: [
      'Redefined the ride experience for Lyft’s most recent passenger  app redesign.  Rooted in rigorous user testing, this update was targted to solve discoverability, accessibility  and usability concerns around passenger pickup and ride actions.',
      'The new ride panel prioritizes information for finding your ride, contextual to when you need it.',
    ],
    imgSrc: '../media/rideexperience.png',
    videoSrcMov: '../media/videos/ride_experience.mp4'
  },
  {
    id: 3,
    title: 'Lyft: Dynamic Pin',
    summary: [
      'Created a subtle, fine-tuned interaction for displaying updated ETAs in the location pin. At once, this animation must effectively communicate the most accurate information without calling too much attentiont to the changes in availability.',
    ],
    imgSrc: '../media/dynamicpin.png',
    videoSrcMov: '../media/videos/dynamic_pin_drop.mov'
  },
  {
    id: 4,
    title: 'Lyft: Ride Receipts',
    summary: [
      'Redefined the ride experience for Lyft’s most recent passenger  app redesign.  Rooted in rigorous user testing, this update was targted to solve discoverability, accessibility  and usability concerns around passenger pickup and ride actions.',
      'The new ride panel prioritizes information for finding your ride, contextual to when you need it.',
    ],
    imgSrc: '../media/ride_receipts.png',
    videoSrcMov: '../media/videos/ride_receipts.mov'
  },
]


class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItemId: 1,
      activeVideoSrcMov: '../media/videos/rating_payment.mov',
    }
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
    const activeItem = portfolioItems.find((item) => item.id === sectionId);
    console.log(activeItem);
    if (activeItem !== undefined) {
      this.setState ({
        activeItemId: activeItem.id,
        activeVideoSrcMov: activeItem.videoSrcMov
      });
    }
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
                name={'section-' + (item.id)}
                className="element pd-left-120px va-center"
              >
                <PortfolioItem
                  key={item.id}
                  title={item.title}
                  summary={item.summary}
                  imgSrc={item.imgSrc}
                />
              </Element>
            )
          })
        }
        <Iphone videoSrcMov={this.state.activeVideoSrcMov} />
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
