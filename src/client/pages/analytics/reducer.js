import { actionTypes } from './actions'


const initialState = {
    tests: {}
}

const reducer = (state=initialState, action) => {
    Object.freeze(state);
    switch(action.type) {
        case actionTypes.RECEIVE_ALL_TESTS:
            return {
                ...state,
                tests: action.tests
            }

        default:
            return state;
    }
}


export default reducer;