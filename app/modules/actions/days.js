
import { GET_TIMESHEET_DATA } from '../../constants'

export const days = (data) => {
  return {
      type: GET_TIMESHEET_DATA,
      payload: data
  }
}