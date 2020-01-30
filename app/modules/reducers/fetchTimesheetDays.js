import { GET_TIMESHEET_DATA_PARTICULAR_RANGE } from '../../constants'
import data from '../../dummyData/timesheetData'
initialState = {
  payload:data
  }
const daysTimesheet = (state = initialState, action) => {
  switch(action.type) {
      case GET_TIMESHEET_DATA_PARTICULAR_RANGE:
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
  export default daysTimesheet;