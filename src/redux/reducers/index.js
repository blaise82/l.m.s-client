import { combineReducers } from 'redux';
import testReduxReducer from '../reducers/testReduxReducer';

const rootReducer = combineReducers({
    test: testReduxReducer,
})

export default rootReducer;
