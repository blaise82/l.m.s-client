import { INCREMENT_COUNTER , DECREMENT_COUNTER } from '../../actionTypes/testReduxActionTypes';

export const incrementCounter = (count = 1) => {
    return{
        type: INCREMENT_COUNTER,
        payload: count
    }
}
export const decrementCounter = (count = 1) => {
    return{
        type: DECREMENT_COUNTER,
        payload: count
    }
}
