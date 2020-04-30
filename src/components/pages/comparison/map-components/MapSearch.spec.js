// Import the usual react testing library modules, and the component in question
import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import MapSearch from './MapSearch';

// Import all the modules necessary to mock a redux setup
import { Provider } from 'react-redux';;
import thunk from "redux-thunk";
import configureStore from 'redux-mock-store';

//Import any mock data we need
import citiesIndex from "../../../../data/city_ids.json";


// Format the the cities index data into an array of cities indexes for the autocomplete
const cityIndex = Object.keys(citiesIndex).map(item => {
      const city = citiesIndex[item];
      city.name = item;
      return city
})
// This is the mock data of the city markers filtered by the map based on zoom level in App.js
const mockCityMarkers = cityIndex.slice(0, 30);


//Configure the mockStore function with our middleware
const mockStore = configureStore([thunk]);
const mockSetViewport = jest.fn();
const mockViewport = {}

describe('MapSearch.js', () => {
    // Cleans up after each testing library render
    afterEach(cleanup)
    it('has expected text value after input change event', () => {
        //create a mock store
        const store = mockStore();
        //Render the component on the virtual react DOM wrapped in a mock store provider
        const {getByTestId} = render(
            <Provider store={store}>
                <MapSearch 
                    cityMarkers={mockCityMarkers}
                    viewport={mockViewport}
                    setViewport={mockSetViewport}
                    cityIndex={cityIndex}
                />
            </Provider>
        );
        //Arrange, Act
        const searchBarInput = getByTestId('map-search');
        fireEvent.change(searchBarInput, {target: {value: 'string'}});
        expect(searchBarInput.value).toBe('string');
    })
    it('passes an ADD_CITY action to dispatch when you submit a string', () => {
        //create a mock store
        const store = mockStore();
        //Render the component on the virtual react DOM wrapped in a mock store provider
        const {getByTestId} = render(
            <Provider store={store}>
                <MapSearch 
                    cityMarkers={mockCityMarkers}
                    viewport={mockViewport}
                    setViewport={mockSetViewport}
                    cityIndex={cityIndex}
                />
            </Provider>
        );
        //Arrange, Act
        const searchBarInput = getByTestId('map-search');
        fireEvent.change(searchBarInput, {target: {value: 'string'}});
        expect(searchBarInput.value).toBe('string');
    })
    it.todo('passes an ADD_CITY action to dispatch when you click a suggestion')
})