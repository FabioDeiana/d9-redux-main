export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES"
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES"

export const addToFavourites = (company) => ({
  type: ADD_TO_FAVOURITES,
  payload: company,
})

export const removeFromFavourites = (company) => ({
  type: REMOVE_FROM_FAVOURITES,
  payload: company,
})
