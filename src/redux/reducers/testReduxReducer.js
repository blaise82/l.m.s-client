
import { INCREMENT_COUNTER , DECREMENT_COUNTER } from '../actionTypes/testReduxActionTypes'

const initialState = {
    counter: 0
    }

const testReduxReducer = (state = initialState, action) =>{
    switch(action.type){
        case INCREMENT_COUNTER: 
        return { 
            ...state,
            counter: state.counter + action.payload

        }
        case DECREMENT_COUNTER: 
        return { 
            ...state,
            counter: state.counter - action.payload

        }
        default: return state;
    }
} 

export default testReduxReducer;
