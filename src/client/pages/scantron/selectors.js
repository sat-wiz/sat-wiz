import { createSelector } from 'reselect'

//These selector variables are using reselect syntax
const sectionOneSelector = store => store.scantron.sectionOne;
const sectionTwoSelector = store => store.scantron.sectionTwo;
const sectionThreeSelector = store => store.scantron.sectionThree;
const sectionFourSelector = store => store.scantron.sectionFour;

export const sectionOneKeysSelector = createSelector(
  sectionOneSelector,
  (sectionOne) => Object.keys(sectionOne)
)

export const sectionTwoKeysSelector = createSelector(
  sectionTwoSelector,
  (sectionTwo) => Object.keys(sectionTwo)
);

export const sectionThreeKeysSelector = createSelector(
  sectionThreeSelector,
  (sectionThree) => Object.keys(sectionThree)
);

export const sectionFourKeysSelector = createSelector(
  sectionFourSelector,
  (sectionFour) => Object.keys(sectionFour)
);
