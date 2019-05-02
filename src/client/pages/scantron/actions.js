import * as testsAPI from '../../api/testsAPI';
//actionTypes
export const actionTypes = {
  INPUT_ANSWER: 'INPUT_ANSWER',
  UPDATE_CURRENT_QUESTION: 'UPDATE_CURRENT_QUESTION',

  RECEIVE_ALL_TESTS: 'RECEIVE_ALL_TESTS'
}

//action
export const receiveAllTests = (tests) => ({
  type: actionTypes.RECEIVE_ALL_TESTS,
  tests
})


//action creator
//fat arrow function returns a function
export const requestAllTests = () => async (dispatch) => {
  try {
    //destructure data and rename data as tests
    const { data: tests } = await testsAPI.fetchAllTests()
    console.log(tests)
    dispatch(receiveAllTests(tests));
  }
  catch (e) {
    console.error(e);
  }
}

//action creators && setters
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

