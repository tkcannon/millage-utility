import { SET_TRIPS, ADD_TRIPS, EDIT_TRIP } from "./actions";

import { useReducer } from "react";

export const reducer = (state, aciton) => {
  switch (aciton.type) {
    case SET_TRIPS:
      return { ...state, trips: aciton.trips };

    case ADD_TRIPS:
      return { ...state, trips: [...state.trips, ...aciton.trips] };

    //trips will need identifier (which will be created by idb) to edit

    default:
      return state;
  }
};

export function useTripReducer(initialState) {
  return useReducer(reducer, initialState);
}
