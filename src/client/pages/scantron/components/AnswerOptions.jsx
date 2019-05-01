import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setInputAnswer } from '../actions'
import { getAnswer } from '../selectors'
import styled from 'styled-components';
import MultipleChoice from './MultipleChoice';

export class AnswerOptions extends React.Component {
  constructor(props) {
    super(props);
    this.questionRef = React.createRef();
    this.moveFocus = this.moveFocus.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentDidMount = () => {
    let refNode = this.questionRef.current;
    //because we're attaching the ref to all questions, need to select the first question by using .parentNode 
    //which is the div in the sections container and select the second element which is the first question
    refNode.parentNode.children[0].focus(); 
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
    const { currentQuestion, sectionNum, questionNum } = this.props;
    
    return (
      <AnswerChoicesWrapper ref={ this.questionRef } 
                       tabIndex={0} 
                       onKeyDown={ (e) => this.handleKeyDown(e, sectionNum, questionNum) } 
                       isHighlighted={ currentQuestion === questionNum }>
        <QuestionsNumWrapper>{ questionNum }.</QuestionsNumWrapper>
        <MultipleChoice sectionNum={ sectionNum } questionNum={ questionNum }/>
      </AnswerChoicesWrapper>
    )
  }
}

const AnswerChoicesWrapper = styled.div`
  display: flex; 
  background-color: ${({ isHighlighted }) => isHighlighted ? 'powderblue' : 'transparent'}
`
const QuestionsNumWrapper = styled.strong`
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
  color: ${({ isFilled }) => isFilled ? 'white' : 'black'};
  cursor: pointer;
  user-select: none;
  `

//prevent unnecessary rerendering of entire list after updating an answer by connecting directly to the store
//instead of passing those props from the parent component
const mapStateToProps = (store, ownProps) => ({
  currentQuestion: store.scantron.currentQuestion,
});

const mapDispatchToProps = {
  setInputAnswer,
};

AnswerOptions.propTypes = {
  currentQuestion: PropTypes.number.isRequired,
  answer: PropTypes.string.isRequired,
  setCurrentQuestion: PropTypes.func.isRequired,
  setInputAnswer: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerOptions);