import axios from 'axios';

// action types
export const ADD_TREATMENT = 'ADD_TREATMENT';
export const ADD_TREATMENT_SUCCESS = 'ADD_TREATMENT_SUCCESS';
export const ADD_TREATMENT_ERROR = 'ADD_TREATMENT_ERROR';

// action creators
export const addTreatment = () => {
    return (dispatch) => {
        dispatch({ type: ADD_TREATMENT});
        axios
            .get('linktogohere') // to update
            .then(res => console.log(res))
            // dispatch({ type: ADD_TREATMENT_SUCCESS, payload: response.data.all })
            .catch(err => console.log(err));
            // dispatch({ type: ADD_TREATMENT_ERROR, payload: { message: 'Can not return for you' } })
    }
}
