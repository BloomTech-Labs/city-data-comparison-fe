// Import the usual react testing library modules, and the component in question
import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import DeselectCityButton from './DeselectCityButton.js'

// Import all the modules necessary to mock a redux setup
import { Provider } from 'react-redux';;
import thunk from "redux-thunk";
import configureStore from 'redux-mock-store';

//Configure the mockStore function with our middleware
const mockStore = configureStore([thunk]);

describe('DeselectCityButton.js', () => {

    // Cleans up after each testing library render
    afterEach(cleanup)

    it('passes an REMOVE_CITY action to dispatch', () => {
        //Create a mock store
        const store = mockStore();

        //Render the component wrapped in a mock store provider
        const {getByAltText} = render(
            <Provider store={store}>
                <DeselectCityButton city={{'_id': 1234}}/>
            </Provider>
            );

        //Arrange, act
        const button = getByAltText("Deselect city.");
        fireEvent.click(button)

        //Assert
        expect(store.getActions()[0].type).toBe('REMOVE_CITY')
        expect(store.getActions()[0].payload).toBe(1234)
    })
})