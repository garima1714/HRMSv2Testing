
import { GET_TIMESHEET_DATA_PARTICULAR_RANGE } from '../../constants'

export const daysTimesheet = (data) => {
  return {
      type: GET_TIMESHEET_DATA_PARTICULAR_RANGE,
      payload: data
  }
}