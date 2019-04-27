import { createSelector } from 'reselect'

const scantronSelector = store => store.scantron.answers;

export const sectionOneKeySelector = createSelector(
  scantronSelector,
  (scantron) =>  {
    let sectionOne = [];

    for (let key of scantron.keys()) {
      if (key[0] === 1) sectionOne.push(key);
    }

    return sectionOne;
  }
)

export const sectionTwoKeySelector = createSelector(
  scantronSelector,
  (scantron) =>  {
    let sectionTwo = [];

    for (let key of scantron.keys()) {
      if (key[0] === 1) sectionTwo.push(key);
    }

    return sectionTwo;
  }
);

export const sectionThreeKeySelector = createSelector(
  scantronSelector,
  (scantron) =>  {
    let sectionThree = [];

    for (let key of scantron.keys()) {
      if (key[0] === 1) sectionThree.push(key);
    }

    return sectionThree;
  }
);

export const sectionFourKeySelector = createSelector(
  scantronSelector,
  (scantron) =>  {
    let sectionFour = [];

    for (let key of scantron.keys()) {
      if (key[0] === 1) sectionFour.push(key);
    }

    return sectionFour;
  }
);