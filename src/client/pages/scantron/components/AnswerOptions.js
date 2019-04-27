import React from 'react';
import { connect } from 'react-redux';
import { inputAnswer } from '../scantronActions'

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
  inputAnswer,
};

export default connect(mapStateToProps, mapDispatchToProps)(AnswerOptions);