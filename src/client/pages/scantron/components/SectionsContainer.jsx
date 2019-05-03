import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AnswerOptions from './AnswerOptions'
import {  setCurrentQuestion } from '../actions';
import { getSectionOneQuestions, 
         getSectionTwoQuestions, 
         getSectionThreeQuestions, 
         getSectionFourQuestions, } from '../selectors';
import styled from 'styled-components';

//if not using object destructing we would pass props as a parameter to SectionsContainer functional component.
const SectionsContainer  = ({ sectionOneQuestions, 
                              sectionTwoQuestions, 
                              sectionThreeQuestions, 
                              sectionFourQuestions, 
                              setCurrentQuestion,
                              requestAllTests }) => {
  //creating local state for currentSection because no other components need it
  const [currentSection, setCurrentSection] = useState(1);

  const createSectionList = (questions) => {
    return questions.map((question) => <AnswerOptions key={`s${currentSection}-${question}`} 
                                                      sectionNum={currentSection} 
                                                      questionNum={question}
                                                      setCurrentQuestion={setCurrentQuestion} />)
  }
  
  //created for conditional rendering of sections
  const SECTIONS_MAP = {
    1: sectionOneQuestions,
    2: sectionTwoQuestions,
    3: sectionThreeQuestions,
    4: sectionFourQuestions,
  }

  const nextSection = () => {
    setCurrentSection(currentSection + 1);
    setCurrentQuestion(1);
  }

  const previousSection = () => {
    setCurrentSection(currentSection - 1);
    setCurrentQuestion(1);
  }

  //conditional rendering of buttons
  return (
    <>
      <SectionHeader>Section: {currentSection} </SectionHeader>
      <Section>
        {createSectionList(SECTIONS_MAP[currentSection])}
        {currentSection > 1 && <SectionButtons onClick={previousSection}>Previous</SectionButtons>}
        <Divider></Divider>
        {currentSection < 4 && <SectionButtons onClick={nextSection}>Next</SectionButtons>}  
        <Divider></Divider>
        {currentSection === 4 && <SectionButtons>Submit</SectionButtons>}
      </Section> 
    </>
  );
}

const Section = styled.div`
  display: flex;
  flex-flow: column wrap;
  height: 50em;
  width: 10em;
`

const SectionHeader = styled.h3`
  font-size: 2em;
  color: palevioletred;
`

const SectionButtons = styled.button`
  border: none;
  background: palevioletred
  color: white;
  padding: 5px;
  text-transform: uppercase;
  border-radius: 6px;
  display: inline-block;
  border: 1px solid black;
`

const Divider = styled.div`
  margin-bottom : 10px;
`
const mapStateToProps = store => ({
  sectionOneQuestions: getSectionOneQuestions(store),
  sectionTwoQuestions: getSectionTwoQuestions(store),
  sectionThreeQuestions: getSectionThreeQuestions(store),
  sectionFourQuestions: getSectionFourQuestions(store),
});

const mapDispatchToProps = {
  setCurrentQuestion,
};

//type checking for props
SectionsContainer.propTypes = {
  sectionOneQuestions: PropTypes.array.isRequired,
  sectionTwoQuestions: PropTypes.array.isRequired,
  sectionThreeQuestions: PropTypes.array.isRequired,
  sectionFourQuestions: PropTypes.array.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(SectionsContainer);
