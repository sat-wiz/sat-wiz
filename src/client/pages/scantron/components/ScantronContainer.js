import React from 'react';
import { connect } from 'react-redux';
import AnswerOptions from './AnswerOptions'
import { sectionOneKeySelector, sectionTwoKeySelector, sectionThreeKeySelector, sectionFourKeySelector } from '../selectors';

function ScantronContainer({ sectionOne }) {
  let sectionOneElements = sectionOne.map((key) => <AnswerOptions key={`${key}`} sectionNum={key[0]} questionNum={key[1]} />);
  return (
    <>
      <p>Scantron container</p>
      {sectionOneElements}
    </>
  );
}

const mapStateToProps = store => ({
  sectionOne: sectionOneKeySelector(store),
});

export default connect(mapStateToProps)(ScantronContainer);
