import { createSelector } from 'reselect'
import * as testAPI from '../../api/testAPI';


//actionTypes
export const actionTypes = {
  INPUT_ANSWER: 'INPUT_ANSWER',
  UPDATE_CURRENT_QUESTION: 'UPDATE_CURRENT_QUESTION',
  
  RECEIVE_ALL_TESTS: 'RECEIVE_ALL_TESTS'
}


export const receiveAllTests = (tests) => ({
  type: actionTypes.RECEIVE_ALL_TESTS,
  tests
})

export const requestAllTests = () => (dispatch) => {
  return testAPI.fetchAllTests()
    .then(tests => dispatch(receiveAllTests(tests)));
}





//actions / setters
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

//selectors
const getSectionOne = store => store.scantron.sectionOne;
const getSectionTwo = store => store.scantron.sectionTwo;
const getSectionThree = store => store.scantron.sectionThree;
const getSectionFour = store => store.scantron.sectionFour;
//call parseInt bc keys are strings but need to be numbers
const getQuestions = (section) => Object.keys(section).map(questionNum => parseInt(questionNum))


export const getAnswer = (store, section, questionNum) => store.scantron[section][questionNum];

//memoized selectors using reselect library
export const getSectionOneQuestions = createSelector(
  //the output of getSectionOne gets passed in as params for getQuestions
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