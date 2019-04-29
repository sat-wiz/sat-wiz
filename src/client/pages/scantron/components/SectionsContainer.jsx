import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AnswerOptions from './AnswerOptions'
import { getSectionOneQuestions, getSectionTwoQuestions, getSectionThreeQuestions, getSectionFourQuestions } from '../actions';
//import order: library -> components -> props
import styled from 'styled-components';


//if not using object destructing we would pass props as a parameter to SectionsContainer functional component.
const SectionsContainer  = ({ sectionOneQuestions, sectionTwoQuestions, sectionThreeQuestions, sectionFourQuestions }) => {
  //creating local state for currentSection because no other components need it
  const [currentSection, setCurrentSection] = useState(1);

  const createSectionList = (questions) => {
    return questions.map((question) => <AnswerOptions key={`s${currentSection}-${question}`} 
                                                      sectionNum={currentSection} 
                                                      questionNum={question}/>)
  }
  
  //created for conditional rendering of sections
  const SECTIONS_MAP = {
    1: sectionOneQuestions,
    2: sectionTwoQuestions,
    3: sectionThreeQuestions,
    4: sectionFourQuestions,
  }

  return (
    <div>
      <SectionHeader>Section: {currentSection} </SectionHeader>
      {createSectionList(SECTIONS_MAP[currentSection])}
    </div>
  );
}

const SectionHeader = styled.h3`
  font-size: 2em;
  color: palevioletred;
  
`
const mapStateToProps = store => ({
  sectionOneQuestions: getSectionOneQuestions(store),
  sectionTwoQuestions: getSectionTwoQuestions(store),
  sectionThreeQuestions: getSectionThreeQuestions(store),
  sectionFourQuestions: getSectionFourQuestions(store),
});

//type checking for props
SectionsContainer.propTypes = {
  sectionOneQuestions: PropTypes.array.isRequired,
  sectionTwoQuestions: PropTypes.array.isRequired,
  sectionThreeQuestions: PropTypes.array.isRequired,
  sectionFourQuestions: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(SectionsContainer);
