import { INPUT_ANSWER } from './scantronConstants';


//initialize scantron with empty values 
let section1={}, section2={}, section3={}, section4={}

for (let i = 1; i <= 52; i++) {
  section1[i] = null;
}  

for (let i = 1; i <= 44; i++) {
  section2[i] = null;
}

for (let i = 1; i <= 20; i++) {
  section3[i] = null;
}

for (let i = 1; i <= 38; i++) {
  section4[i] = null;
}  

const initialState = {
  section1: section1,
  section2: section2,
  section3: section3,
  section4: section4,
};

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case INPUT_ANSWER:
      return {
        ...state
      };
    
    default:
      return state;
  }
};

export default reducer;