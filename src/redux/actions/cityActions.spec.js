// This test uses the libraries redux-mock-store and axios-mock-adapter to test our thunks
// https://redux.js.org/recipes/writing-tests
// https://github.com/ctimmerm/axios-mock-adapter

import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

import Axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { initialState } from "../reducers/cityReducer.js";
import * as cityActions from "./cityActions.js";
import * as types from "./actionTypes";

import {mockCityMarkers} from "../../utils/testing/mockCityData.js";

//Mock the module 'react-ga' so none of the functions we are testing try to actually use google analytics
import ReactGA from "react-ga";
jest.mock("react-ga");

//Apply whatever redux middleware we are using to our mock store configuration
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

//Create our axios mock object
const mockAxios = new MockAdapter(Axios);

describe("City actions", () => {
  //After each test clear all axios endpoints that the given test mocked
  afterEach(() => {
    mockAxios.resetHandlers();
  });

  describe("Get city", () => {
    it("should create action GET_CITY_SUCCESS when passed a city object", () => {
      //Creates a mock for this axios endpoint within this test, gets cleared after each test with mockAxios.restore in aftereach clause above
      mockAxios
        .onGet(`7244`)
        .reply(200, mockCityMarkers["Angie, LA"]);
      //Write the action objects we expect the thunk action creator "getCity()""  to create
      const expectedActions = [
        { type: types.GET_CITY },
        {
          type: types.GET_CITY_SUCCESS,
          payload: mockCityMarkers["Angie, LA"],
        },
      ];

      //Create a mock store with the same initialState imported from cityReducer.js
      const store = mockStore(initialState);

      //Pass the action creator getCity(cityObject) into the mocked store's dispatch() function
      //The mocked store logs all the actions that are created
      //We expect store.getActions() to equal our array of expectedActions defined above
      return store
        .dispatch(cityActions.getCity(mockCityMarkers["Angie, LA"]))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });

  describe("Get cities", () => {
    it("should create action CITY_COMPARISON_SUCCESS if passed an array of city objects", () => {
      mockAxios
        .onGet(`/7244`)
        .reply(200, mockCityMarkers["Angie, LA"]);
      mockAxios
        .onGet(`/1533`)
        .reply(200, mockCityMarkers["Angels, CA"]);

      const expectedActions = [
        { type: types.CITY_COMPARISON },
        {
          type: types.CITY_COMPARISON_SUCCESS,
          payload: [
            mockCityMarkers["Angie, LA"],
            mockCityMarkers["Angels, CA"],
          ],
        },
      ];

      const store = mockStore(initialState);

      return store
        .dispatch(
          cityActions.cityComparison([
            mockCityMarkers["Angie, LA"],
            mockCityMarkers["Angels, CA"],
          ])
        )
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("should create action CITY_COMPARISON_SUCCESS if passed an array of strings", () => {
      mockAxios
        .onGet(`/angi`)
        .reply(200, mockCityMarkers);
      mockAxios
        .onGet("/angel")
        .reply(200, mockCityMarkers);
      mockAxios
        .onGet(`/7244`)
        .reply(200, mockCityMarkers["Angie, LA"]);

      const expectedActions = [
        { type: types.CITY_COMPARISON },
        {
          type: types.CITY_COMPARISON_SUCCESS,
          payload: [
            mockCityMarkers["Angie, LA"],
            mockCityMarkers["Angie, LA"],
          ],
        },
      ];

      const store = mockStore(initialState);

      return store
        .dispatch(cityActions.cityComparison(["angi", "angel"]))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("should create action CITY_COMPARISON_SUCCESS if passed an array containing one a string and a city object", () => {
      mockAxios
        .onGet(`/angi`)
        .reply(200, mockCityMarkers);
      mockAxios
        .onGet(`/7244`)
        .reply(200, mockCityMarkers["Angie, LA"]);
      mockAxios
        .onGet(`/1533`)
        .reply(200, mockCityMarkers["Angels, CA"]);

      const expectedActions = [
        { type: types.CITY_COMPARISON },
        {
          type: types.CITY_COMPARISON_SUCCESS,
          payload: [
            mockCityMarkers["Angie, LA"],
            mockCityMarkers["Angels, CA"],
          ],
        },
      ];

      const store = mockStore(initialState);

      return store
        .dispatch(
          cityActions.cityComparison(["angi", mockCityMarkers["Angels, CA"]])
        )
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });

  describe("Remove city", () => {
    it("should remove a city based on id", () => {
      const expectedActions = [
        {
          type: types.REMOVE_CITY,
          payload: "7444",
        },
      ];
      const store = mockStore(initialState);
      store.dispatch(cityActions.removeCity("7444"));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("Clear all cities", () => {
    it("should clear all cities in state", () => {
      const expectedActions = [
        {
          type: types.CLEAR_ALL_CITIES
        },
      ];
      const store = mockStore(initialState);
      store.dispatch(cityActions.clearAllCities());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
