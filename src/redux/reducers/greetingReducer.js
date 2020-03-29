import { GREETING } from '../actionTypes/greetingActionType'
import initialState from '../store/initialState';

const greetingReducer = (state = initialState, { type, payload}) =>{
    switch(type){
        case GREETING: 
        return { 
            ...state,
            welcome: payload

        }
        default: return state;
    }
} 

export default greetingReducer;
