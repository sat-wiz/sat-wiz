import * as testsAPI from '../../api/testsAPI';
import { resolve } from 'path';
//actionTypes
export const actionTypes = {
  INPUT_ANSWER: 'INPUT_ANSWER',
  UPDATE_CURRENT_QUESTION: 'UPDATE_CURRENT_QUESTION',
}



//action creators && setters
export const setInputAnswer = (sectionNum, questionNum, answer) => ({
  type: actionTypes.INPUT_ANSWER,
  sectionNum,
  questionNum,
  answer,
});

export const setCurrentQuestion = (nextQuestionNum) => ({
  type: actionTypes.UPDATE_CURRENT_QUESTION,
  nextQuestionNum,
})

