import { GREETING } from '../../actionTypes/greetingActionType';

export const greetUser = (greeting = 'Welcome to L.M.S - Your Library Managment System') => {
    return{
        type: GREETING,
        payload: greeting
    }
}

