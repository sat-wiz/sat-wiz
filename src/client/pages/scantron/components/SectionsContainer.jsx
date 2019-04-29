import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AnswerOptions from './AnswerOptions'
import { getSectionOneQuestions, getSectionTwoQuestions, getSectionThreeQuestions, getSectionFourQuestions } from '../actions';
//import order: library -> components -> props
import styled from 'styled-components';


//if not using object destructing we would pass props as a parameter to SectionsContainer functional component.
const SectionsContainer  = ({ currentSection, sectionOne, sectionTwo, sectionThree, sectionFour }) => {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const sectionOneList = sectionOne.map((key) => <AnswerOptions key={`s1-${key}`} sectionNum={1} questionNum={key} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} />);
  const sectionTwoList = sectionTwo.map((key) => <AnswerOptions key={`s2-${key}`} sectionNum={2} questionNum={key} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} />);
  const sectionThreeList = sectionThree.map((key) => <AnswerOptions key={`s3-${key}`} sectionNum={3} questionNum={key} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} />);
  const sectionFourList = sectionFour.map((key) => <AnswerOptions key={`s4-${key}`} sectionNum={4} questionNum={key} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} />);
  
  //conditional rendering of sections based on currentSecion prop
  const SECTION_LISTS = {
    1: sectionOneList,
    2: sectionTwoList,
    3: sectionThreeList,
    4: sectionFourList
  }
  
  return (
    <div>
      <SectionHeader>Section: {currentSection} </SectionHeader>
      {SECTION_LISTS[currentSection]}
    </div>
  );
}

const SectionHeader = styled.h3`
  font-size: 2em;
  color: palevioletred;
  
`
const mapStateToProps = store => ({
  sectionOne: getSectionOneQuestions(store),
  sectionTwo: getSectionTwoQuestions(store),
  sectionThree: getSectionThreeQuestions(store),
  sectionFour: getSectionFourQuestions(store),
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
