import { ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES } from "./actionTypes"

export const addToFavouritesAction = (company) => ({
  type: ADD_TO_FAVOURITES,
  payload: company,
})

export const removeFromFavouritesAction = (company) => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: company,
})
