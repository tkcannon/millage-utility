import { SET_TRIPS, ADD_TRIPS, EDIT_TRIP } from "./actions";

import { useReducer } from "react";

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_TRIPS:
      return { ...state, trips: action.trips };

    case ADD_TRIPS:
      //
      //need to check trips to compare start / end (ids won't be saved in csv) and only add trips that don't already exist
      //if millage overlap, inform user and bring up conflict to edit
      //create modal for conflict edit
      //
      return { ...state, trips: [...state.trips, ...action.trips] };

    //trips will need identifier (which will be created by idb) to edit

    default:
      return state;
  }
};

export function useTripReducer(initialState) {
  return useReducer(reducer, initialState);
}
