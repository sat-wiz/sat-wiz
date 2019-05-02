import * as testsAPI from '../../api/testsAPI';


export const actionTypes = {
    RECEIVE_ALL_TESTS: 'RECEIVE_ALL_TESTS'
}

export const receiveAllTests = (tests) => ({
    type: actionTypes.RECEIVE_ALL_TESTS,
    tests
})


export const requestAllTests = () => async (dispatch) => {
    try {
        const {data : tests} = await testsAPI.fetchAllTests()
        dispatch(receiveAllTests(tests));
    }
    catch(e) {
        console.log(e);
    }
}