import {initialState} from './cityReducer.js'
import cityReducer from './cityReducer.js'

import * as types from '../actions/actionTypes.js'

describe('City reducer', () => {
  it('should return the initial state', () => {
    expect(cityReducer(undefined, {})).toEqual(initialState)
  })

  it.todo("should set isFetching true on GET_CITY")

  it.todo("should add a city on a GET_CITY_SUCCESS")

  it.todo("should add an unused color on GET_CITY_SUCCESS")

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