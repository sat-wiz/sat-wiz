import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AnswerOptions from './AnswerOptions'
import { getSectionOneKeys, getSectionTwoKeys, getSectionThreeKeys, getSectionFourKeys } from '../actions';
//import order: library -> components -> props
import styled from 'styled-components';


//if not using object destructing we would pass props as a parameter to SectionsContainer functional component.
const SectionsContainer  = ({ currentSection, sectionOne, sectionTwo, sectionThree, sectionFour }) => {
  const sectionOneList = sectionOne.map((key) => <AnswerOptions key={`${key}`} sectionNum={1} questionNum={key} />);
  const sectionTwoList = sectionTwo.map((key) => <AnswerOptions key={`${key}`} sectionNum={2} questionNum={key} />);
  const sectionThreeList = sectionThree.map((key) => <AnswerOptions key={`${key}`} sectionNum={3} questionNum={key} />);
  const sectionFourList = sectionFour.map((key) => <AnswerOptions key={`${key}`} sectionNum={4} questionNum={key} />);
  
  //conditional rendering of sections based on currentSecion prop
  const SECTION_LISTS = {
    1: sectionOneList,
    2: sectionTwoList,
    3: sectionThreeList,
    4: sectionFourList
  }
  
  return (
    <>
      <SectionHeader>Section: {currentSection} </SectionHeader>
      {SECTION_LISTS[currentSection]}
    </>
  );
}

const SectionHeader = styled.h3`
  font-size: 2em;
  color: palevioletred;
  
`
const mapStateToProps = store => ({
  sectionOne: getSectionOneKeys(store),
  sectionTwo: getSectionTwoKeys(store),
  sectionThree: getSectionThreeKeys(store),
  sectionFour: getSectionFourKeys(store),
  currentSection: store.scantron.currentSection,
});

//type checking for props
SectionsContainer.propTypes = {
  sectionOne: PropTypes.array.isRequired,
  sectionTwo: PropTypes.array.isRequired,
  sectionThree: PropTypes.array.isRequired,
  sectionFour: PropTypes.array.isRequired,
  currentSection: PropTypes.number.isRequired,
}

export default connect(mapStateToProps)(SectionsContainer);
