import {combineReducers} from 'redux'
import getTimeSheets from './getTimeSheets'
import days from './days'
// import auth from './auth'
// import uiReducer from './spinnerUI';
// import compId from './componentId';
// import searchReducer from './searchValue';

const rootReducer = combineReducers({
   //TODO
   timeSheets : getTimeSheets,
   days : days
})

export default rootReducer;
