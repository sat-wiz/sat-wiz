import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAnswer, setCurrentQuestion, setInputAnswer } from '../actions'
import styled from 'styled-components';

class AnswerOptions extends React.Component {
  constructor(props) {
    super(props);
    this.questionRef = React.createRef();
    this.moveFocus = this.moveFocus.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount = () => {
    let refNode = this.questionRef.current;
    refNode.parentNode.children[1].focus(); 
    this.moveFocus(refNode);
  }
  
  moveFocus = (node) => {
    node.addEventListener('keydown', (e) => {
      let active = document.activeElement;
      let { keyCode } = e;
      //prevent scoll down or scroll up
      if (keyCode === 40 || 38) {
        e.preventDefault();
      }
 
      //move to next question on pressing 1,2,3,4 or down key
      if((keyCode === 49 || keyCode === 50 || keyCode === 51 ||
          keyCode === 52 || keyCode === 40) && active.nextSibling) {
        active.nextSibling.focus();
        this.props.setCurrentQuestion(this.props.currentQuestion + 1)
      }
      //move to prev question on pressing up key
      if(keyCode === 38 && active.previousSibling) {
        active.previousSibling.focus();
        this.props.setCurrentQuestion(this.props.currentQuestion - 1)
      }
    });
  }

  handleKeyDown = (e, sectionNum, questionNum) => {
    let { key } = e;
    const KEY_MAP = {
      1: 'A',
      2: 'B',
      3: 'C',
      4: 'D',
    };
    if (key === '1' || key === '2' || key === '3' || key === '4' ) {
      this.props.setInputAnswer(sectionNum, questionNum, KEY_MAP[key])
    };
  }

  render = () => {
    const { currentQuestion, sectionNum, questionNum, answer } = this.props;
    
    return (
      <QuestionWrapper ref={ this.questionRef } 
                       tabIndex={0} 
                       onKeyDown={ (e) => this.handleKeyDown(e, sectionNum, questionNum) } 
                       isHighlighted={ currentQuestion === questionNum }>
        <AnswerChoicesWrapper>{ questionNum }.</AnswerChoicesWrapper>
          <Bubble isFilled={ answer === 'A'}>A</Bubble>
          <Bubble isFilled={ answer === 'B'}>B</Bubble>
          <Bubble isFilled={ answer === 'C'}>C</Bubble>
          <Bubble isFilled={ answer === 'D'}>D</Bubble>
      </QuestionWrapper>
    )
  }
}

const QuestionWrapper = styled.div`
  display: flex; 
  flex-wrap: nowrap;
  background-color: ${({ isHighlighted }) => isHighlighted ? 'powderblue' : 'transparent'}
`
const AnswerChoicesWrapper = styled.strong`
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
`
const Bubble = styled.span`
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 20px;
  background-color: ${({ isFilled }) => isFilled ? 'palevioletred' : 'white'};
  font-color: ${({ isFilled }) => isFilled ? 'white' : 'black'};
  cursor: pointer;
  user-select: none;
  `

const SECTIONS = {
  1: 'sectionOne',
  2: 'sectionTwo',
  3: 'sectionThree',
  4: 'sectionFour'
}

//prevent unnecessary rerendering of entire list after updating an answer
const mapStateToProps = (store, ownProps) => ({
  currentQuestion: store.scantron.currentQuestion,
  answer: getAnswer(store, SECTIONS[ownProps.sectionNum], ownProps.questionNum),
});

const mapDispatchToProps = {
  setCurrentQuestion,
  setInputAnswer,
};

AnswerOptions.propTypes = {
  currentQuestion: PropTypes.number.isRequired,
  answer: PropTypes.string.isRequired,
  setCurrentQuestion: PropTypes.func.isRequired,
  setInputAnswer: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerOptions);