import {greetUser} from '../../redux/actions/greeting/greetingAction';
import {GREETING} from '../../redux/actionTypes/greetingActionType';

describe('Greeting user action creator', () =>{
    it ('should create an action creator to greet a user', ()=>{
        const message = 'Welcome to L.M.S - Your Library Managment System';
        const expectedAction = {
            type: GREETING,
            payload: message
        }
        expect(greetUser(message)).toEqual(expectedAction);
    })
})