import greetingReducer from '../../redux/reducers/greetingReducer';
import initialSate from '../../redux/store/initialState';

describe('Greeting reducer', () => {
    it('should return welcome message successfully to the user', () => {
        let state;
        state = greetingReducer(initialSate, {});
        expect(state).toEqual({greeting:{welcome:'Welcome to L.M.S - Your Library Managment System'}});
    });
})
