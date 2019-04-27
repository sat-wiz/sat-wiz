import React from 'react';
import { connect } from 'react-redux';

function AnswerOptions({ sectionNum, questionNum, answer }) {
  return (
    <>
      <p>Section #: {sectionNum}</p>
      <p>Question #: {questionNum}</p>
    </>
  );
}

const mapStateToProps = (store, ownProps) => ({
  answer: store.scantron[[ownProps.sectionNum, ownProps.questionNum]],
});

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerOptions);