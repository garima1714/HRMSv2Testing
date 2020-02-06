import {days} from '../../modules/actions/days';
import {GET_TIMESHEET} from '../../services/api/api'

export function fetchSheets(data) {
    let formdata = new FormData();
    formdata.append('from',data.from)
    formdata.append('to',data.to)
    formdata.append('day',data.day)
    
    return dispatch =>
    
    fetch('http://172.25.122.36/api/values', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'cache': "no-cache",
        // 'mode': "cors",
        'body': formdata
      },
   
    })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
         console.log(response.json());
        
          dispatch(days(response));
      } else {
      
        console.log("error in response not 200")
      }
    })
    .catch(error => { console.log('request failed', error); });
}



export default fetchSheets;