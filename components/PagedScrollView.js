import React from 'react';
import { SectionsContainer, Section } from 'react-fullpage';
const propTypes = {
  children: React.PropTypes.node,
};

const options = {
  activeClass: 'active', // the class that is appended to the sections links
  anchors: [], // the anchors for each sections
  arrowNavigation: true, // use arrow keys
  className: 'SectionContainer', // the class name for the section container
  delay: 1000, // the scroll animation speed
  navigation: true, // use dots navigatio
  scrollBar: false, // use the browser default scrollbar
  sectionClassName: 'Section', // the section class name
  sectionPaddingTop: '0', // the section top padding
  sectionPaddingBottom: '0', // the section bottom padding
  verticalAlign: false, // align the content of each section vertical
};

class PagedScrollView extends React.Component {
  render() {
    let index = 0;
    return (
      <SectionsContainer className="container" {...options}>
        {this.props.children.map((child) => <Section key={index++}>{child}</Section>)}
      </SectionsContainer>
    );
  }
}

PagedScrollView.propTypes = propTypes;

export default PagedScrollView;
