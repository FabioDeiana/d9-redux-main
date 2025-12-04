import {
  FETCH_JOBS_REQUEST,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_FAILURE,
} from "./actionTypes"

// Action creators sincroni
const fetchJobsRequest = () => ({
  type: FETCH_JOBS_REQUEST,
})

const fetchJobsSuccess = (jobs) => ({
  type: FETCH_JOBS_SUCCESS,
  payload: jobs,
})

const fetchJobsFailure = (error) => ({
  type: FETCH_JOBS_FAILURE,
  payload: error,
})

// Action creator asincrono con Redux Thunk
export const fetchJobsAction = (query) => {
  return async (dispatch) => {
    const baseEndpoint =
      "https://strive-benchmark.herokuapp.com/api/jobs?search="

    // Inizio caricamento
    dispatch(fetchJobsRequest())

    try {
      const response = await fetch(baseEndpoint + query + "&limit=20")

      if (response.ok) {
        const { data } = await response.json()
        // Successo - salvo i dati
        dispatch(fetchJobsSuccess(data))
      } else {
        // Errore HTTP
        dispatch(fetchJobsFailure("Error fetching results"))
      }
    } catch (error) {
      // Errore di rete
      dispatch(fetchJobsFailure(error.message))
    }
  }
}
