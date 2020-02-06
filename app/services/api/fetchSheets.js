import {daysTimesheet} from '../../modules/actions/fetchTimesheetDays';
const axios = require('axios');

function fetchSheets() {
    return dispatch => {
        console.log("hello")
        // dispatch(daysTimesheet());
        fetch('http://localhost:44348/api/values',"GET",{Accept:"text/xml","Content-Type":"application/json"})
        .then(res => res)
        .then(res => {
           
            if(res.error) {
                throw(res.error);
            }
            
            dispatch(daysTimesheet(res));
            return res;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default fetchSheets;