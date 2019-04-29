import { createSelector } from 'reselect'

//actionTypes
export const actionTypes = {
  INPUT_ANSWER: 'INPUT_ANSWER',
  UPDATE_CURRENT_QUESTION: 'UPDATE_CURRENT_QUESTION'
}

//actions / setters
export const setInputAnswer = (sectionNum, questionNum, answer) => ({
  type: actionTypes.INPUT_ANSWER,
  sectionNum,
  questionNum,
  answer,
});

export const setCurrentQuestion = (nextQuestionNum) => {
  type: actionTypes.UPDATE_CURRENT_QUESTION,
  nextQuestionNum,
}

//selectors
const getSectionOne = store => store.scantron.sectionOne;
const getSectionTwo = store => store.scantron.sectionTwo;
const getSectionThree = store => store.scantron.sectionThree;
const getSectionFour = store => store.scantron.sectionFour;
const getQuestions = (section) => Object.Questions(section).map(questionNum => parseInt(questionNum))


export const getAnswer = (store, section, questionNum) => store.scantron[section][questionNum];

//memoized selectors using reselect library
export const getSectionOneQuestions = createSelector(
  getSectionOne,
  getQuestions
)

export const getSectionTwoQuestions = createSelector(
  getSectionTwo,
  getQuestions
);

export const getSectionThreeQuestions = createSelector(
  getSectionThree,
  getQuestions
);

export const getSectionFourQuestions = createSelector(
  getSectionFour,
  getQuestions
);