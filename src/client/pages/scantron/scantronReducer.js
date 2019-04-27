import { INPUT_ANSWER } from './scantronConstants';


//initialize scantron with empty values 
// let section1={}, section2={}, section3={}, section4={}

// for (let i = 1; i <= 52; i++) {
//   section1[i] = null;
// }  

// for (let i = 1; i <= 44; i++) {
//   section2[i] = null;
// }

// for (let i = 1; i <= 20; i++) {
//   section3[i] = null;
// }

// for (let i = 1; i <= 38; i++) {
//   section4[i] = null;
// }  

let scantron = new Map();

for (let i = 1; i <= 52; i++) {
  scantron.set([1, i], null);
}
for (let i = 1; i <= 44; i++) {
  scantron.set([2, i], null);
}
for (let i = 1; i <= 20; i++) {
  scantron.set([3, i], null);
}
for (let i = 1; i <= 38; i++) {
  scantron.set([4, i], null);
}

const initialState = scantron;

const reducer = (state=initialState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case INPUT_ANSWER:
      let scantronCopy = new Map(state);
      scantronCopy.set([action.sectionNum, action.questionNum], action.answer);
      return scantronCopy;
    
    default:
      return state;
  }
};

export default reducer;