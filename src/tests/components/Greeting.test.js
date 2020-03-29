import React from 'react'
import { Provider } from 'react-redux';
import {render} from '@testing-library/react'
import Greeting from '../../components/greeting/Greeting';
import store from '../../redux/store/index';
 
describe('Greeting component', () => {
    it('should render greeting component propely', () => {
        const { asFragment } = render( <Provider store={store}><Greeting /></Provider>)
        expect(asFragment(<Provider store={store}><Greeting /></Provider>)).toMatchSnapshot()
       })
    })
