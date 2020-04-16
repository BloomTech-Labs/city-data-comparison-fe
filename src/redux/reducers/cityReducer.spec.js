import {initialState} from './cityReducer.js'
import cityReducer from './cityReducer.js'
import cityMockData from '../actions/cityActionsMockData.js'

import * as types from '../actions/actionTypes.js'

describe('City reducer', () => {
  it('should return the initial state', () => {
    expect(cityReducer(undefined, {})).toEqual(initialState)
  })

  it("should set isFetching true on GET_CITY", () => {
      expect(cityReducer(undefined, {type: types.GET_CITY}).isFetching).toEqual(true)
  })

  it("should add a city on a GET_CITY_SUCCESS", () => {
    const stateIsFetching = JSON.parse(JSON.stringify(initialState))
    stateIsFetching.isFetching = true;

    const finalState = cityReducer(stateIsFetching, {type: types.GET_CITY_SUCCESS, payload: cityMockData["Angels, CA"]});

    expect(finalState.selected).toHaveLength(1)
    expect(typeof finalState.selected[0]).toMatch(/object/)
  })

  it("should add an unused city color to the newly added city on GET_CITY_SUCCESS", () => {
      //Create dummy cities
    const previousCity1 = JSON.parse(JSON.stringify(cityMockData["Angels, CA"]))
    previousCity1.color = "#A33A00";
    const previousCity2 = JSON.parse(JSON.stringify(cityMockData["Angie, LA"]))
    previousCity2.color = "#0041A3";
    const newCity = JSON.parse(JSON.stringify(cityMockData["Kane, IL"]))
    
    //Create dummy current state with dummy cities
    const stateWithOtherColors = JSON.parse(JSON.stringify(initialState))
    stateWithOtherColors.selected = [previousCity1, previousCity2]

    //Run the reducer with the payload
    const finalState = cityReducer(stateWithOtherColors, {type: types.GET_CITY_SUCCESS, payload: newCity});


    //Assert
    expect(finalState.selected[2].color).toBeDefined()
    expect(finalState.selected[2].color).not.toEqual(previousCity1.color)
    expect(finalState.selected[2].color).not.toEqual(previousCity2.color)

  })

  it("should not add a city on GET_CITY_SUCCESS when there are already three cities", () => {
    

    const previousCity1 = JSON.parse(JSON.stringify(cityMockData["Angels, CA"]))
    const previousCity2 = JSON.parse(JSON.stringify(cityMockData["Angie, LA"]))
    const previousCity3 = JSON.parse(JSON.stringify(cityMockData["Kane, IL"]))
    const newCity = JSON.parse(JSON.stringify(cityMockData["Rangely, CO"]))

    const stateWithOtherCities = JSON.parse(JSON.stringify(initialState))
    stateWithOtherCities.selected = [previousCity1, previousCity2, previousCity3]

    const finalState = cityReducer(stateWithOtherCities, {type: types.GET_CITY_SUCCESS, payload: newCity});

    expect(finalState.selected).toHaveLength(3)
  })

  it("should set isFetching true on GET_CITIES", () => {

    expect(cityReducer(undefined, {type: types.GET_CITIES}).isFetching).toEqual(true)
  })

  it("should replace two cities on GET_CITIES_SUCCESS", () => {

    const previousCity1 = JSON.parse(JSON.stringify(cityMockData["Angels, CA"]))
    const previousCity2 = JSON.parse(JSON.stringify(cityMockData["Angie, LA"]))
    const previousCity3 = JSON.parse(JSON.stringify(cityMockData["Kane, IL"]))

    const newCity1 = JSON.parse(JSON.stringify(cityMockData["Rangely, CO"]))
    const newCity2 = JSON.parse(JSON.stringify(cityMockData["Wrangell, AK"]))

    const stateWithOtherCities = JSON.parse(JSON.stringify(initialState))
    stateWithOtherCities.selected = [previousCity1, previousCity2, previousCity3]

    const finalState = cityReducer(stateWithOtherCities, {type: types.GET_CITIES_SUCCESS, payload: [newCity1, newCity2]});

    expect(finalState.selected).toHaveLength(2)
    expect(finalState.selected[0]).toEqual(newCity1)
    expect(finalState.selected[1]).toEqual(newCity2)
  })

  it("should set colors for both cities on GET_CITIES_SUCCESS", () => {
    const newCity1 = JSON.parse(JSON.stringify(cityMockData["Rangely, CO"]))
    const newCity2 = JSON.parse(JSON.stringify(cityMockData["Wrangell, AK"]))

    const finalState = cityReducer(undefined, {type: types.GET_CITIES_SUCCESS, payload: [newCity1, newCity2]})

    expect(finalState.selected[0].color).toBeDefined()
    expect(finalState.selected[1].color).toBeDefined()
    expect(finalState.selected[0].color).not.toEqual(finalState.selected[1].color)
  })

  it("should remove a city from state on REMOVE_CITY", () => {
    const previousCity1 = JSON.parse(JSON.stringify(cityMockData["Rangely, CO"]));
    const previousCity2 = JSON.parse(JSON.stringify(cityMockData["Wrangell, AK"]));
    const stateWithOtherCities = JSON.parse(JSON.stringify(initialState))
    stateWithOtherCities.selected = [previousCity1, previousCity2]


    const finalState = cityReducer(stateWithOtherCities, {type: types.REMOVE_CITY, payload: previousCity1.ID})

    expect(finalState.selected).not.toContain(previousCity1)
  })

  it("should clear all cities from state on CLEAR_CITIES", () => {
    const previousCity1 = JSON.parse(JSON.stringify(cityMockData["Rangely, CO"]));
    const previousCity2 = JSON.parse(JSON.stringify(cityMockData["Wrangell, AK"]));
    const stateWithOtherCities = JSON.parse(JSON.stringify(initialState))
    stateWithOtherCities.selected = [previousCity1, previousCity2]

    const finalState = cityReducer(stateWithOtherCities, {type: types.CLEAR_CITIES})

    expect(finalState.selected).toHaveLength(0)

    it.todo("should add a city object on ADD_CITY")
  })

})