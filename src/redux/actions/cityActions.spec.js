import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "";
import * as types from "./actionTypes";

import MockAdapter from "axios-mock-adapter";
import Axios from "axios";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mockAxios = new MockAdapter(Axios);

describe("City actions", () => {
  afterEach(() => {
    mockAxios.restore();
  });

  describe("Get city", () => {
    it("creates GET_CITY_SUCCESS when fetching city has been", () => {
    //   mock.onGet("/", { params: { searchText: "John" } }).reply(200, {
    //     users: [{ id: 1, name: "John Smith" }],
    //   });

        const expectedActions = [
            {type: types.GET_CITY},
            {type: types.GET_CITY_SUCCESS}
        ]


    });
    it.todo("");
  });

  describe("Get cities", () => {
    it.todo("");
    it.todo("");
  });

//   it("creates FETCH_TODOS_SUCCESS when fetching todos has been done", () => {
//     fetchMock.getOnce("/todos", {
//       body: { todos: ["do something"] },
//       headers: { "content-type": "application/json" },
//     });

//     const expectedActions = [
//       { type: types.FETCH_TODOS_REQUEST },
//       { type: types.FETCH_TODOS_SUCCESS, body: { todos: ["do something"] } },
//     ];
//     const store = mockStore({ todos: [] });

//     return store.dispatch(actions.fetchTodos()).then(() => {
//       // return of async actions
//       expect(store.getActions()).toEqual(expectedActions);
//     });
//   });
});
