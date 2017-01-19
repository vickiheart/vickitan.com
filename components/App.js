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
      'I redesigned Lyft’s rating and payment flow to help you finish your ride with just a few quick taps. I optimized this experience for the most common use case – you had a great Lyft ride and you’re already calling the next one.',
      'After the ride has ended, the map tilts to signal the state change, so you can be certain you’re no longer being charged. The pink pin indicates your drop-off location, serving as a subtle reminder and context for rating and giving feedback to your driver.',
    ],
    imgSrc: './media/rating_payments.png',
    videoSrcWebm: 'http://vickitan.com/media/videos/rating_payment.webm',
    videoSrcMp4: 'http://vickitan.com/media/videos/rating_payment.mp4'
  },
  {
    id: 2,
    title: 'Lyft: Ride Experience',
    summary: [
      'I owned the design of Lyft’s in-ride panel, which displayed passenger and driver information for over 14 million rides in 2016. This design solved for a number of prior usability and discoverability issues, keeping in mind the small window of opportunity you have to find your driver in a busy intersection.',
      'The ride information panel is expandable, allowing for a closer look at your driver, their car, and your fellow line passengers without needing to blocking the map. The panel also expands contextually to let you know at a glance when your driver has arrived, and minimizes once your ride has begun, so you can adjust your drop-off address if needed.',
    ],
    imgSrc: './media/rideexperience.png',
    videoSrcWebm: 'http://vickitan.com/media/videos/ride_experience.webm',
    videoSrcMp4: 'http://vickitan.com/media/videos/ride_experience.mp4'
  },
  {
    id: 3,
    title: 'Lyft: Dynamic Pin',
    summary: [
      'I created a subtle drop animation to display the most up-to-date car ETAs in the location pin. The goal was to effectively communicate the most accurate pickup times, with consideration to server constraints, without calling too much attention to changes in availability.',
    ],
    imgSrc: './media/dynamicpin.png',
    videoSrcWebm: 'http://vickitan.com/media/videos/dynamic_pin_drop.webm',
    videoSrcMp4: 'http://vickitan.com/media/videos/dynamic_pin_drop.mp4'
  },
  {
    id: 4,
    title: 'Lyft: Ride Receipts',
    summary: [
      'I created a modular email for Lyft email receipts to help passengers quickly identify the ride, understand pricing, and take action (such as adding a tip or finding a lost item). Email components include: the ride summary, an itemized breakdown of price, and social and promotional cards.',
    ],
    imgSrc: './media/ride_receipts.png',
    videoSrcWebm: 'http://vickitan.com/media/videos/ride_receipts.webm',
    videoSrcMp4: 'http://vickitan.com/media/videos/ride_receipts.mp4'
  },
]


class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItemId: 0,
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
      });
    } else {
      const activeItem = portfolioItems.find((item) => item.id === sectionId);
      if (activeItem !== undefined) {
        this.setState ({
          activeItemId: activeItem.id,
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
                  videoSrcWebm={item.videoSrcWebm}
                  videoSrcMp4={item.videoSrcMp4}
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

export default App;
