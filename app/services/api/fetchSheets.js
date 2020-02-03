import {daysTimesheet} from '../../modules/actions/fetchTimesheetDays';

function fetchSheets() {
    return dispatch => {
        // dispatch(daysTimesheet());
        fetch('http://localhost:44348/api/values')
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch(daysTimesheet(res));
            return res.products;
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export default fetchSheets;