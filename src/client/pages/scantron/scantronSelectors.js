import { createSelector } from 'reselect'

const scantronSelector = store => store.scantron.answers;

export const sectionOneSelector = createSelector(
  scantronSelector,
  (scantron) =>  {
    let sectionOne = new Map();

    for (let key in scantron) {
      let sectionNum = key[0], questionNum = key[1], answer = scantron[key];
      if (sectionNum === 1) sectionOne.set([sectionNum, questionNum], answer);
    }

    return sectionOne;
  }
)

export const sectionTwoSelector = createSelector(
  scantronSelector,
  (scantron) =>  {
    let sectionTwo = new Map();

    for (let key in scantron) {
      let sectionNum = key[0], questionNum = key[1], answer = scantron[key];
      if (sectionNum === 1) sectionTwo.set([sectionNum, questionNum], answer);
    }

    return sectionTwo;
  }
)

export const sectionThreeSelector = createSelector(
  scantronSelector,
  (scantron) =>  {
    let sectionThree = new Map();

    for (let key in scantron) {
      let sectionNum = key[0], questionNum = key[1], answer = scantron[key];
      if (sectionNum === 1) sectionThree.set([sectionNum, questionNum], answer);
    }

    return sectionThree;
  }
)

export const sectionFourSelector = createSelector(
  scantronSelector,
  (scantron) =>  {
    let sectionFour = new Map();

    for (let key in scantron) {
      let sectionNum = key[0], questionNum = key[1], answer = scantron[key];
      if (sectionNum === 1) sectionFour.set([sectionNum, questionNum], answer);
    }

    return sectionFour;
  }
)
