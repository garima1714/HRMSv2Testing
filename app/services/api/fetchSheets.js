import {days} from '../../modules/actions/days';
import {GET_TIMESHEET} from '../../services/api/api'

export function fetchSheets(data) {
    let formdata = new FormData();
    formdata.append('from',data.from)
    formdata.append('to',data.to)
    formdata.append('day',data.day)
    // var request = new XMLHttpRequest();
    // request.open('GET','https://localhost:44348/api/values')
    // request.send();
    // console.log('success', request);
    return dispatch =>
    
    fetch('https://localhost:44348/api/values', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        cache: "no-cache",
        mode: "cors",
        body: formdata
      },
    //   body: JSON.stringify({
    //     from: data.from,
    //     to: data.to,
    //     day: data.day
    //   }),
    })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
         console.log(response);
        
          dispatch(days(response));
      } else {
        // const error = new Error(response.statusText);
        // error.response = response;
        // dispatch(loginError(error));
        // throw error;
        console.log("error in response not 200")
      }
    })
    .catch(error => { console.log('request failed', error); });
}



export default fetchSheets;