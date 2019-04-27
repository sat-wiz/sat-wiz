import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { inputAnswer } from '../actions'
import styled from 'styled-components';


class AnswerOptions extends React.Component {
  constructor(props) {
    super(props)
    
    this.inputRef = null;

    this.setInputRef = element => {
      this.textInput = element;
    }

    this.focusInput = () => {
      if(this.inputRef) this.inputRef.focus();
    }

    this.handleKeyDown = this.handleKeyDown.bind(this);
  }


  componentDidMount() {
    this.focusInput();
  }

  handleKeyDown (event) {
    this.focusInput();
    if(event.key === '1') {
      console.log('1 pressed here!')
    } else if (event.key === '2') {
      console.log('2 pressed here!')
    }
    else if (event.key === '3') {
      console.log('3 pressed here!')
    }
    else if (event.key === '4') {
      console.log('4 pressed here!')
    }
  }

  render() {
    const { sectionNum, questionNum, answer } = this.props;

    return (
      <>
        <Wrapper>
          <Question>{questionNum}.</Question>
          <Bubble id='A' ref={this.setInputRef} >A</Bubble>
          <Bubble id='B' onKeyDown={this.handleKeyDown}>B</Bubble>
          <Bubble id='C' onKeyDown={this.handleKeyDown}>C</Bubble>
          <Bubble id='D' onKeyDown={this.handleKeyDown}>D</Bubble>
        </Wrapper>
      </>
    )
  }
}
// function AnswerOptions({ sectionNum, questionNum, answer }) {
//   let inputRef = null;

//   function setInputRef(element) {
//     inputRef = element;
//   }

//   function focusInput() {
//     if (inputRef) inputRef.focus();
//   }

//   function handleKeyDown (event) {
//     focusInput();
//     if(event.key === '1') {
//       console.log('1 pressed here!')
//     } else if (event.key === '2') {
//       console.log('2 pressed here!')
//     }
//     else if (event.key === '3') {
//       console.log('3 pressed here!')
//     }
//     else if (event.key === '4') {
//       console.log('4 pressed here!')
//     }
//   }

//   return (
//     <>
//       <Wrapper>
//         <Question>{questionNum}.</Question>
//         <Bubble id='A' ref={setInputRef} onKeyDown={handleKeyDown}>A</Bubble>
//         <Bubble id='B' onKeyDown={handleKeyDown}>B</Bubble>
//         <Bubble id='C' onKeyDown={handleKeyDown}>C</Bubble>
//         <Bubble id='D' onKeyDown={handleKeyDown}>D</Bubble>
//       </Wrapper>
//     </>
//   )
// }


const Wrapper = styled.section`
  display: flex; 
  flex-wrap: nowrap;=
`
const Question = styled.strong`
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

  &:hover {
    background-color: palevioletred;
    color: white;
  }

  &:focus {
    background-color: palevioletred;
    color: white;
  }

  
`


const SECTIONS = {
  1: 'sectionOne',
  2: 'sectionTwo',
  3: 'sectionThree',
  4: 'sectionFour'
}

//prevent unnecessary rerendering of entire list after updating an answer
const mapStateToProps = (store, ownProps) => ({
  answer: store.scantron[SECTIONS[ownProps.sectionNum]],
});

const mapDispatchToProps = {
  inputAnswer,
};

AnswerOptions.propTypes = {
  answer: PropTypes.string.isRequired,
  inputAnswer: PropTypes.func.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(AnswerOptions);