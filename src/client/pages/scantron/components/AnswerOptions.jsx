import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { inputAnswer } from '../actions'

function AnswerOptions({ sectionNum, questionNum, answer }) {
  return (
    <>
      <p>Section #: {sectionNum}</p>
      <p>Question #: {questionNum}</p>
    </>
  );
}

//prevent unnecessary rerendering of entire list after updating an answer
const mapStateToProps = (store, ownProps) => ({
  answer: store.scantron[[ownProps.sectionNum, ownProps.questionNum]],
});

const mapDispatchToProps = {
  inputAnswer,
};

AnswerOptions.propTypes = {
  answer: PropTypes.string.isRequired,
  inputAnswer: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerOptions);