import {
    ADD_SECTION_FAILURE,
    ADD_SECTION_REQUEST,
    ADD_SECTION_SUCCESS
} from '../actionTypes/bookSectionTypes';

const initialState = {
    loading: false,
    message: '',
    error: ''
}

const bookSectionReducer = (state= initialState, action) => {

    switch(action.type){
        case ADD_SECTION_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ADD_SECTION_SUCCESS:
            return {
                loading: false,
                message: action.payload
            }
        case ADD_SECTION_FAILURE:
            return {
                loading: false,
                message: '',
                error: action.payload
            }
        default: return state
    }

}

export default bookSectionReducer;
