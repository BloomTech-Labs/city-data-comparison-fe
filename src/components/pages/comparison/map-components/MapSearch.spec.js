// Import the usual react testing library modules, and the component in question
import React from 'react'
import { render, fireEvent, cleanup } from '@testing-library/react'
import DeselectCityButton from './DeselectCityButton.js';
import MapSearch from './MapSearch';
// Import all the modules necessary to mock a redux setup
import { Provider } from 'react-redux';;
import thunk from "redux-thunk";
import configureStore from 'redux-mock-store';

//Import any mock data we need
import citiesIndex from "../../../../data/city_ids.json";


// Format the the cities index data into an array of cities indexes for the autocomplete
const cityIndex = Object.keys(citiesIndex).map(item => {
      city = citiesIndex[item];
      city.name = item;
      return city
})


//Configure the mockStore function with our middleware
const mockStore = configureStore([thunk]);
const mockSetViewport = jest.fn();
const mockMenu = jest.fn()
const mockSearch = jest.fn()
const mockSetSearch = jest.fn()
const mockCityMarkers = jest.fn()
const mockViewport = jest.fn()

describe('MapSearch.js', () => {
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
    it.todo('passes an ADD_CITY action to dispatch when you submit a string', () => {
        //create a mock store
        const store = mockStore();
        //Render the component wrapped in a mock store provider
        const {getByTestId} = render(
            <Provider store={store}>
                <MapSearch 
                    search={mockSearch}
                    setSearch={mockSetSearch}
                    cityMarkers={mockCityMarkers}
                    viewport={mockViewport}
                    setViewport={mockSetViewport}
                    cityIndex={cityIndex}
                />
            </Provider>
        );
        //Arrange, Act
    })
    it.todo('passes an ADD_CITY action to dispatch when you click a suggestion')
})