import { createSelector } from 'reselect'

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