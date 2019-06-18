import { createStore, combineReducers } from 'redux';
import exerciseReducer from './exerciseReducer';
import reducer from './reducer';

const rootReducer = combineReducers({
    user: reducer,
    exercises: exerciseReducer
})


export default createStore(rootReducer);