import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import DeselectCityButton from './DeselectCityButton.js'

import { Provider } from 'react-redux';;
import thunk from "redux-thunk";
import configureStore from 'redux-mock-store';

const mockStore = configureStore([thunk]);

describe('DeselectCityButton', () => {

    afterEach(cleanup)

    it('passes an REMOVE_CITY action to dispatch', () => {
        //Configure a mockstore
        const store = mockStore();

        const {getByAltText} = render(
            <Provider store={store}>
                <DeselectCityButton city={{'_id': 1234}}/>
            </Provider>
            );

        const button = getByAltText("Deselect city.");
        fireEvent.click(button)

        expect(store.getActions()[0].type).toBe('REMOVE_CITY')
        expect(store.getActions()[0].payload).toBe(1234)
    })
})