// Import the usual react testing library modules, and the component in question
import React from "react";
import { render, fireEvent, waitFor, cleanup } from "@testing-library/react";
import MapSearch from "./MapSearch";

// import axios modules
import Axios from "axios";
import MockAdapter from "axios-mock-adapter";

// Import all the modules necessary to mock a redux setup
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";

//Import any mock data we need
import citiesIndex from "../../../data/city_ids.json";
import {
  mockCityMarkers as mockSuggestionResponse,
  mockCityData,
} from "../../../utils/testing/mockCityData.js";

//Mock the module 'react-ga' so none of the functions we are testing try to actually use google analytics
import ReactGA from "react-ga";
jest.mock("react-ga");

//Create our axios mock object
const mockAxios = new MockAdapter(Axios);

// Format the the cities index data into an array of cities indexes for the autocomplete
const cityIndex = Object.keys(citiesIndex).map((item) => {
  const city = citiesIndex[item];
  city.name = item;
  return city;
});
// This is the mock data of the city markers filtered by the map based on zoom level in App.js
const mockCityMarkers = cityIndex.slice(0, 30);

//Configure the mockStore function with our middleware
const mockStore = configureStore([thunk]);
const mockSetViewport = jest.fn();
const mockViewport = {};

describe("MapSearch.js", () => {
  // Cleans up after each testing library render
  afterEach(() => {
    mockAxios.resetHandlers();
    cleanup();
  });
  it("has expected text value after input change event", () => {
    //create a mock store
    const store = mockStore({ cityReducer: { selected: [] } });
    //Render the component on the virtual react DOM wrapped in a mock store provider
    const { getByTestId } = render(
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
    const searchBarInput = getByTestId("search-bar-input");
    fireEvent.change(searchBarInput, { target: { value: "string" } });
    expect(searchBarInput.value).toBe("string");
  });
  it("passes an GET_CITY action to dispatch when you submit a string", async () => {
    // Create a mock axios response, preventing actual calls to the API
    mockAxios.onGet("/philadelphia").reply(200, mockSuggestionResponse);
    mockAxios.onGet("/7244").reply(200, mockCityData["Philadelphia, PA"]);
    //create a mock store
    const store = mockStore({ cityReducer: { selected: [] } });
    //Render the component on the virtual react DOM wrapped in a mock store provider
    const { getByTestId } = render(
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
    const searchBarInput = getByTestId("search-bar-input");
    const searchBarSubmit = getByTestId("search-bar-submit");

    fireEvent.change(searchBarInput, { target: { value: "philadelphia" } });
    fireEvent.click(searchBarSubmit);

    // Wait for all the async action creaters/thunks to complete
    await waitFor(() => expect(mockAxios.history.get.length).toBe(2));

    // Assert on all the actions
    expect(store.getActions()[0].type).toBe("GET_CITY");
    expect(store.getActions()[1].type).toBe("GET_CITY_SUCCESS");
  });
  it.todo("passes an GET_CITY action to dispatch when you click a suggestion");
});
