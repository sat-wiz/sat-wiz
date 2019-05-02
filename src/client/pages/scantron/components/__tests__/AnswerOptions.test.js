import React from 'react';
import ReactDOM from 'react-dom';
import { AnswerOptions } from '../AnswerOptions.jsx';
import { mount } from 'enzyme';

let key ='s1-1';
let sectionNum = 1; 
let questionNum = 1; 
let setCurrentQuestion = jest.fn();
let Component = <AnswerOptions key={key} 
                                   sectionNum={sectionNum} 
                                   questionNum={questionNum}
                                   setCurrentQuestion={setCurrentQuestion} /> 

                                   it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render( Component, div);
});

it('fills in bubbles when clicked', () => {
  let wrapper = mount(Component)
  let button = wrapper.find('AnswerChoicesWrapper').childAt(0);
  button.simulate('click');
  expect(button.props('isfilled').toEqual(true));                            
})

//clicking answer choices will update state
it('updates state when answer choice is clicked', () => {
  




})












// highlight should not move past last question

//change highlighting to match element that is being focused