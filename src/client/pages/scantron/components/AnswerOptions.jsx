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
    const node = this.questionRef.current;
    node.parentNode.children[1].focus();
    this.moveFocus(node);
  }

  //TODO: refactor moveFocus and handleKeyDown into parent component
  //TODO: make bubble clickable
  moveFocus(node) {
    node.addEventListener('keydown', (e) => {
      const active = document.activeElement;

      //prevent scoll down or scroll up
      if (e.keyCode === 40 || 38) {
        e.preventDefault();
      }
      //move to next question on pressing 1,2,3,4 or down key
      if((e.keyCode === 49 || e.keyCode === 50 || e.keyCode === 51 ||
          e.keyCode === 52 || e.keyCode === 40) && active.nextSibling) {
        active.nextSibling.focus();
      }
      //move to prev question on pressing up key
      if(e.keyCode === 38 && active.previousSibling) {
        active.previousSibling.focus();
      }
    });
  }

  handleKeyDown(e) {
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
          { answer === 'A' ? (<FilledBubble >A</FilledBubble>) : (<Bubble >A</Bubble>) }
          { answer === 'B' ? (<FilledBubble >B</FilledBubble>) : (<Bubble >B</Bubble>) }
          { answer === 'C' ? (<FilledBubble >C</FilledBubble>) : (<Bubble >C</Bubble>) }
          { answer === 'D' ? (<FilledBubble >D</FilledBubble>) : (<Bubble >D</Bubble>) }
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
const Bubble = styled.span`
  font-size: 1em;
  margin: 0.5em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 20px;
  background-color: white;
  cursor: pointer;
  user-select: none;
`
const FilledBubble = styled(Bubble)`
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