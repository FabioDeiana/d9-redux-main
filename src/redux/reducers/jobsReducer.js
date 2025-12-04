import {
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE,
} from "../actions/actionTypes"

const initialState = {
  list: [],
  isLoading: false,
  error: null,
}

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      }

    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        list: action.payload,
        isLoading: false,
        error: null,
      }

    case FETCH_JOBS_FAILURE:
      return {
        ...state,
        list: [],
        isLoading: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export default jobsReducer
