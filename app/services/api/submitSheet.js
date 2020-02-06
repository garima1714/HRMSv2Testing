import {Loading,success,error} from '../../modules/actions/submitSheets';


export function SubmitSheets(data) {
    let formdata = new FormData();
    formdata.append('from',data.customer)
    formdata.append('to',data.project)
    formdata.append('day',data.hours)
    formdata.append('day',data.task)
    formdata.append('day',data.company)
    // var request = new XMLHttpRequest();
    // request.open('GET','https://localhost:44348/api/values')
    // request.send();
    // console.log('success', request);
    dispatch(Loading());
    return dispatch =>
    
    fetch('https://localhost:44348/api/values', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        cache: "no-cache",
        mode: "cors",
        
      },
      body: JSON.stringify({
        data: formdata
      }),
    })
    .then(response => {
      if (response.status >= 200 && response.status < 300) {
         console.log(response);
        
          dispatch(success(response));
      } else {
        // const error = new Error(response.statusText);
        // error.response = response;
        // dispatch(loginError(error));
        // throw error;
        dispatch(error())
        console.log("error in response not 200")
      }
    })
    .catch(error => { console.log('request failed', error); });
}



export default SubmitSheets;