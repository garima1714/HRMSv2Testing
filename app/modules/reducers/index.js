import {combineReducers} from 'redux'
import getTimeSheets from './getTimeSheets'
// import auth from './auth'
// import uiReducer from './spinnerUI';
// import compId from './componentId';
// import searchReducer from './searchValue';

const rootReducer = combineReducers({
   //TODO
   timeSheets : getTimeSheets
})

export default rootReducer;
