import { configureStore } from "@reduxjs/toolkit"
import favouritesReducer from "../reducers/favouritesReducer"
import jobsReducer from "../reducers/jobsReducer"

const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
    jobs: jobsReducer,
  },
})

export default store
