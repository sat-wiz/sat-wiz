import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AnswerOptions from './AnswerOptions'
import { sectionOneKeysSelector, sectionTwoKeysSelector, sectionThreeKeysSelector, sectionFourKeysSelector } from '../selectors';

function ScantronContainer({ sectionOne, currentSection }) {
  let sectionOneElements = sectionOne.map((key) => <AnswerOptions key={`${key}`} sectionNum={key[0]} questionNum={key[1]} />);
  return (
    <>
      <h1>Scantron Container</h1>
      <p>Current section: {currentSection} </p>
      {sectionOneElements}
    </>
  );
}

const mapStateToProps = store => ({
  sectionOne: sectionOneKeysSelector(store),
  currentSection: store.scantron.currentSection,
});

ScantronContainer.propTypes = {
  sectionOne: PropTypes.array.isRequired,
  currentSection: PropTypes.number.isRequired,
}

export default connect(mapStateToProps)(ScantronContainer);
