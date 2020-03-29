import axios from 'axios';
import 
{
ADD_SECTION_FAILURE,
ADD_SECTION_REQUEST,
ADD_SECTION_SUCCESS
} from '../actionTypes/bookSectionTypes';

export const addSectionRequest = () => {
    return {
        type: ADD_SECTION_REQUEST
    }
}

export const addSectionFailure = error => {
    return {
        type: ADD_SECTION_FAILURE,
        payload: error
    }
}

export const addSectionSuccess = message => {
    return {
        type: ADD_SECTION_SUCCESS,
        payload: message
    }
}

export const addSection = (data, token) => {
    return (dispatch) => {
        dispatch(addSectionRequest());
        axios.post('https://lms-server-octopus.herokuapp.com/api/v1/sections',
         data,
         {
            headers: {
            'Content-Type': 'application/json',
            'x-auth-token': `${token}`
         }
        }).then( res => {
            const response = res.data.message;
            dispatch(addSectionSuccess(response));
        })
        .catch(error => {
            const errorMsg = error.response.data.message
            dispatch(addSectionFailure(errorMsg));
        })
    }
}
