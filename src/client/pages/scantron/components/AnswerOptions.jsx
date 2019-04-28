import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAnswer, setInputAnswer } from '../actions'
import styled from 'styled-components';


class AnswerOptions extends React.Component {
  constructor(props) {
    super(props)
    
    this.questionRef = React.createRef();
    this.moveFocus = this.moveFocus.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount() {
    this.moveFocus();
  }

  moveFocus() {
    const node = this.questionRef.current;

    node.addEventListener('keydown', function(e) {
      const active = document.activeElement;

      //prevent scoll down or scroll up
      if (e.keyCode === 40 || 38) {
        e.preventDefault();
      }
      //move to next question on pressing 1,2,3,4 or down key
      if((e.keyCode === 49 || e.keyCode === 50 || e.keyCode === 51 || e.keyCode === 52 || e.keyCode === 40) && active.nextSibling) {
        active.nextSibling.focus();
      }
      //move to prev question on pressing up key
      if(e.keyCode === 38 && active.previousSibling) {
        active.previousSibling.focus();
      }
    });
  }

  handleKeyDown (e) {
    if(e.key === '1') {
      this.props.setInputAnswer(this.props.sectionNum, this.props.questionNum, 'A')
    } else if (e.key === '2') {
      this.props.setInputAnswer(this.props.sectionNum, this.props.questionNum, 'B')
    }
    else if (e.key === '3') {
      this.props.setInputAnswer(this.props.sectionNum, this.props.questionNum, 'C')
    }
    else if (e.key === '4') {
      this.props.setInputAnswer(this.props.sectionNum, this.props.questionNum, 'D')
    }
  }

  render() {
    const { sectionNum, questionNum, answer } = this.props;

    return (
      <>
        <QuestionWrapper tabIndex={0} ref={ this.questionRef } onKeyDown={ this.handleKeyDown } >
          <AnswerChoicesWrapper>{ questionNum }.</AnswerChoicesWrapper>
          { answer === 'A' ? (<FilledBubble tabIndex={-1} >A</FilledBubble>) : (<Bubble tabIndex={-1} >A</Bubble>) }
          { answer === 'B' ? (<FilledBubble tabIndex={-1} >B</FilledBubble>) : (<Bubble tabIndex={-1} >B</Bubble>) }
          { answer === 'C' ? (<FilledBubble tabIndex={-1} >C</FilledBubble>) : (<Bubble tabIndex={-1} >C</Bubble>) }
          { answer === 'D' ? (<FilledBubble tabIndex={-1} >D</FilledBubble>) : (<Bubble tabIndex={-1} >D</Bubble>) }
        </QuestionWrapper>
      </>
    )
  }
}

const QuestionWrapper = styled.section`
  display: flex; 
  flex-wrap: nowrap;
`
const AnswerChoicesWrapper = styled.strong`
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
`
const Bubble = styled.button`
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 20px;
  background-color: white;
`
const FilledBubble = styled.button`
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 20px;
  background-color: palevioletred;
  font-color: white;
`
const SECTIONS = {
  1: 'sectionOne',
  2: 'sectionTwo',
  3: 'sectionThree',
  4: 'sectionFour'
}

//prevent unnecessary rerendering of entire list after updating an answer
const mapStateToProps = (store, ownProps) => ({
  answer: getAnswer(store, SECTIONS[ownProps.sectionNum], ownProps.questionNum),
});

const mapDispatchToProps = {
  setInputAnswer,
};

AnswerOptions.propTypes = {
  answer: PropTypes.string.isRequired,
  setInputAnswer: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerOptions);