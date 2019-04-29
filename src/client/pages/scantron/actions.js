import { createSelector } from 'reselect'

//actionTypes
export const actionTypes = {
  INPUT_ANSWER: 'INPUT_ANSWER',
}

//actions / setters
export const setInputAnswer = (sectionNum, questionNum, answer) => ({
  type: actionTypes.INPUT_ANSWER,
  sectionNum,
  questionNum,
  answer,
});


//selectors
const getSectionOne = store => store.scantron.sectionOne;
const getSectionTwo = store => store.scantron.sectionTwo;
const getSectionThree = store => store.scantron.sectionThree;
const getSectionFour = store => store.scantron.sectionFour;

export const getAnswer = (store, section, questionNum) => store.scantron[section][questionNum];

//memoized selectors using reselect library
export const getSectionOneKeys = createSelector(
  getSectionOne,
  (sectionOne) => Object.keys(sectionOne)
)

export const getSectionTwoKeys = createSelector(
  getSectionTwo,
  (sectionTwo) => Object.keys(sectionTwo)
);

export const getSectionThreeKeys = createSelector(
  getSectionThree,
  (sectionThree) => Object.keys(sectionThree)
);

export const getSectionFourKeys = createSelector(
  getSectionFour,
  (sectionFour) => Object.keys(sectionFour)
);