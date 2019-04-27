import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AnswerOptions from './AnswerOptions'
import { sectionOneKeysSelector, sectionTwoKeysSelector, sectionThreeKeysSelector, sectionFourKeysSelector } from '../selectors';

function SectionsContainer({ currentSection, sectionOne, sectionTwo, sectionThree, sectionFour }) {
  const sectionOneList = sectionOne.map((key) => <AnswerOptions key={`${key}`} sectionNum={key[0]} questionNum={key[1]} />);
  const sectionTwoList = sectionTwo.map((key) => <AnswerOptions key={`${key}`} sectionNum={key[0]} questionNum={key[1]} />);
  const sectionThreeList = sectionThree.map((key) => <AnswerOptions key={`${key}`} sectionNum={key[0]} questionNum={key[1]} />);
  const sectionFourList = sectionFour.map((key) => <AnswerOptions key={`${key}`} sectionNum={key[0]} questionNum={key[1]} />);
  
  const SECTION_LISTS = {
    1: sectionOneList,
    2: sectionTwoList,
    3: sectionThreeList,
    4: sectionFourList
  }

  return (
    <>
      <h1>Scantron Container</h1>
      <p>Current section: {currentSection} </p>
      {SECTION_LISTS[currentSection]}
    </>
  );
}

const mapStateToProps = store => ({
  sectionOne: sectionOneKeysSelector(store),
  sectionTwo: sectionTwoKeysSelector(store),
  sectionThree: sectionThreeKeysSelector(store),
  sectionFour: sectionFourKeysSelector(store),
  currentSection: store.scantron.currentSection,
});

SectionsContainer.propTypes = {
  sectionOne: PropTypes.array.isRequired,
  sectionTwo: PropTypes.array.isRequired,
  sectionThree: PropTypes.array.isRequired,
  sectionFour: PropTypes.array.isRequired,
  currentSection: PropTypes.number.isRequired,
}

export default connect(mapStateToProps)(SectionsContainer);
