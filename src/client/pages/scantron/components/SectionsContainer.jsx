import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AnswerOptions from './AnswerOptions'
import { sectionOneKeysSelector, sectionTwoKeysSelector, sectionThreeKeysSelector, sectionFourKeysSelector } from '../selectors';
//import order: library -> components -> props
import styled from 'styled-components';



const Scantron = styled.h1`
  font-size: 3em;
  color: pink;
  
`
const Section = styled.h3`
  font-size: 2em;
  color: palevioletred;
  
`

//if not using object destructing we would pass props as a parameter to SectionsContainer functional component.

function SectionsContainer({ currentSection, sectionOne, sectionTwo, sectionThree, sectionFour }) {

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
      <Scantron>Scantron - YEEET PROGRESS :C</Scantron>
      <Section>Section: {currentSection} </Section>
      {SECTION_LISTS[currentSection]}
    </>
  );
}

//memoized selectors using reselect
const mapStateToProps = store => ({
  sectionOne: sectionOneKeysSelector(store),
  sectionTwo: sectionTwoKeysSelector(store),
  sectionThree: sectionThreeKeysSelector(store),
  sectionFour: sectionFourKeysSelector(store),
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
