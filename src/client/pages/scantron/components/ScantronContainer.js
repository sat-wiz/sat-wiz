import React from 'react';
import { connect } from 'react-redux';
import { sectionOneSelector, sectionTwoSelector, sectionThreeSelector, sectionFourSelector } from '../scantronSelectors';

function ScantronContainer({ sectionOne }) {
  let sectionOneElements = sectionOne.map(() => <Answer key={} sectionNum={} questionNum={} />) 
  return (
    <>
      <p>Scantron container</p>
    </>
  );
}

const mapStateToProps = store => ({
  sectionOne: sectionOneSelector,
});

export default connect(mapStateToProps)(ScantronContainer);
