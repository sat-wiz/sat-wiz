import { INPUT_ANSWER } from './scantronConstants'

export const inputAnswer = (sectionNum, questionNum, answer) => ({
  type: INPUT_ANSWER,
  sectionNum: sectionNum,
  questionNum: questionNum,
  answer: answer,
});