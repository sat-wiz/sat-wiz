import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { getAnswer } from '../selectors'

const MultipleChoice = ({ answer }) => {
    return (
        <>
          <Bubble isFilled={ answer === 'A'}>A</Bubble>
          <Bubble isFilled={ answer === 'B'}>B</Bubble>
          <Bubble isFilled={ answer === 'C'}>C</Bubble>
          <Bubble isFilled={ answer === 'D'}>D</Bubble>
        </>
    );
}

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

const SECTIONS = {
  1: 'sectionOne',
  2: 'sectionTwo',
  3: 'sectionThree',
  4: 'sectionFour'
}

const mapStateToProps = (store, ownProps) => ({
  answer: getAnswer(store, SECTIONS[ownProps.sectionNum], ownProps.questionNum),
});

export default connect(mapStateToProps)(MultipleChoice);
  
  