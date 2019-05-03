import { actionTypes } from './actions';

//initialize scantron with empty values { [sectionNum, questionNum]: answer }
let sectionOne  = {}, sectionTwo = {}, sectionThree = {}, sectionFour = {}

for (let i = 1; i <= 52; i++) {
  sectionOne[i] = '';
}
for (let i = 1; i <= 44; i++) {
  sectionTwo[i] = '';
}
for (let i = 1; i <= 20; i++) {
  sectionThree[i] = '';
}
for (let i = 1; i <= 38; i++) {
  sectionFour[i] = '';
}

const initialState = { 
  sectionOne: sectionOne,
  sectionTwo: sectionTwo,
  sectionThree: sectionThree,
  sectionFour: sectionFour,
  
  currentQuestion: 1,
};

const reducer = (state=initialState, action) => {
  //freeze state to avoid accidental mutation
  Object.freeze(state);

  switch(action.type) {
    case actionTypes.INPUT_ANSWER:
      const SECTIONS = {
        1: 'sectionOne',
        2: 'sectionTwo',
        3: 'sectionThree',
        4: 'sectionFour'
      }

      //Declare which section we will be working with
      let sectionKey = SECTIONS[action.sectionNum];
      //Make a copy of the original section (we do not mutate original state);
      let newSection = {...state[sectionKey]};
      //With new section copy, update the answer for its corresponding question.
      newSection[action.questionNum] = action.answer
      return {
        ...state,
        [sectionKey] : newSection
      };
    
    case actionTypes.UPDATE_CURRENT_QUESTION:
      return {
        ...state,
        currentQuestion: action.nextQuestionNum,
      }
      

    default:
      return state;
  }
};

export default reducer;