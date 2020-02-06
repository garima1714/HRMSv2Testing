import { GET_TIMESHEET_DATA } from '../../constants'
// import Immutable from 'imm';
import data from '../../dummyData/timesheetData'
const initialState = {
  payload:data
  }
const days = (state = initialState, action) => {
  switch(action.type) {
      case GET_TIMESHEET_DATA:
          return {
              ...state,
              data: action.payload
          }
         
      break;

      default:
          // the dispatched action is not in this reducer, return the state unchanged
          return state;
  }
}
  export default days;