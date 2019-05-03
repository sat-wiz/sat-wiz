import {createStore, compose, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import scantronReducer from './pages/scantron/reducer'; 
import analyticsReducer from './pages/analytics/reducer'

const reducers = combineReducers({
    scantron: scantronReducer,
    analytics: analyticsReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers, 
    composeEnhancer(applyMiddleware(thunk))
)

export default store;