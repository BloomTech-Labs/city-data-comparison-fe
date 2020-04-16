import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

import Axios from "axios";
import MockAdapter from "axios-mock-adapter";

import { initialState } from "../reducers/cityReducer.js";
import * as cityActions from "./cityActions.js";
import * as types from "./actionTypes";

import cityActionsMockData from "./cityActionsMockData.js";

import ReactGA from "react-ga";
jest.mock("react-ga");


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockAxios = new MockAdapter(Axios);


describe("City actions", () => {
  //Before each test mock the module 'react-ga' so none of the functions we are testing try to actually use google analytics
  beforeEach(() => {
    
  });
  //After each test clear the object that mocks all the axios endpoints, so that each test can individually decide what the mocked response is
  afterEach(() => {
    mockAxios.resetHandlers();
  });

  describe("Get city", () => {
    it("should create action GET_CITY_SUCCESS when passed a city object", () => {
      //Creates a mock for this axios endpoint within this test, gets cleared after each test with mockAxios.restore in aftereach clause above
      mockAxios
        .onGet("https://api.citrics.io/jkekal6d6e5si3i2ld66d4dl/citydata/7244")
        .reply(200, cityActionsMockData["Angie, LA"]);
      //Write the action objects we expect the thunk action creator "getCity()""  to create
      const expectedActions = [
        { type: types.GET_CITY },
        {
          type: types.GET_CITY_SUCCESS,
          payload: cityActionsMockData["Angie, LA"],
        },
      ];

      //Create a mock store with the same initialState imported from cityReducer.js
      const store = mockStore(initialState);

      //Pass the action creator getCity(cityObject) into the mocked store's dispatch() function
      //The mocked store logs all the actions that are created
      //We expect store.getActions() to equal our array of expectedActions defined above
      return store
        .dispatch(cityActions.getCity(cityActionsMockData["Angie, LA"]))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
  });

  describe("Get cities", () => {
    it("Should create action GET_CITIES_SUCCESS if passed an array of city objects", () => {
      mockAxios
      .onGet("https://api.citrics.io/jkekal6d6e5si3i2ld66d4dl/citydata/7244")
      .reply(200, cityActionsMockData["Angie, LA"]);
      mockAxios
      .onGet("https://api.citrics.io/jkekal6d6e5si3i2ld66d4dl/citydata/1533")
      .reply(200, cityActionsMockData["Angels, CA"]);

      const expectedActions = [
        { type: types.GET_CITIES },
        {
          type: types.GET_CITIES_SUCCESS,
          payload: [cityActionsMockData["Angie, LA"], cityActionsMockData["Angels, CA"]],
        },
      ];
     
      const store = mockStore(initialState);

      return store
      .dispatch(cityActions.getCities([cityActionsMockData["Angie, LA"], cityActionsMockData["Angels, CA"]]))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      })
    });

    it.todo("Should create action GET_CITIES_SUCESS if passed an array of strings");

    it.todo("Should create action GET_CITIES_SUCESS if passed an array containing one a string and a city object");
    
  });

});
