import {
  ADD_TO_FAVOURITES,
  REMOVE_FROM_FAVOURITES,
} from "../actions/actionTypes"

const initialState = {
  list: [],
}

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      // Evito duplicati
      if (state.list.includes(action.payload)) {
        return state
      }
      return {
        ...state,
        list: [...state.list, action.payload],
      }

    case REMOVE_FROM_FAVOURITES:
      return {
        ...state,
        list: state.list.filter((company) => company !== action.payload),
      }

    default:
      return state
  }
}

export default favouritesReducer
