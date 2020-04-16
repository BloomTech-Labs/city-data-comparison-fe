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

    const expectedState = JSON.parse(JSON.stringify(initialState));
    expectedState.selected = [cityMockData["Angels, CA"]]

    expect(cityReducer(undefined, {type: types.GET_CITY_SUCCESS, payload: cityMockData["Angels, CA"]})).toEqual(expectedState)
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

  it.todo("should not add a city on GET_CITY_SUCCESS when there are already three cities")

  it.todo("should set isFetching true on GET_CITIES")

  it.todo("should replace two cities on GET_CITIES_SUCCESS")

  it.todo("should set colors for both cities on GET_CITIES_SUCCESS")

  it.todo("should clear a city from state on REMOVE_CITY")

  it.todo("should clear all cities from state on CLEAR_CITIES")


//   it('should handle ADD_TODO', () => {
//     expect(
//       reducer([], {
//         type: types.ADD_TODO,
//         text: 'Run the tests'
//       })
//     ).toEqual([
//       {
//         text: 'Run the tests',
//         completed: false,
//         id: 0
//       }
//     ])

//     expect(
//       reducer(
//         [
//           {
//             text: 'Use Redux',
//             completed: false,
//             id: 0
//           }
//         ],
//         {
//           type: types.ADD_TODO,
//           text: 'Run the tests'
//         }
//       )
//     ).toEqual([
//       {
//         text: 'Run the tests',
//         completed: false,
//         id: 1
//       },
//       {
//         text: 'Use Redux',
//         completed: false,
//         id: 0
//       }
//     ])
//   })
})