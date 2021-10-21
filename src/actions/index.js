export const ADD_ITEM_TO_FAV = 'ADD_ITEM_TO_FAV'
export const REMOVE_ITEM_FROM_FAV = 'REMOVE_ITEM_FROM_FAV'

export const addToCartAction = (company) => ({
    type: ADD_ITEM_TO_FAV,
    payload: company,
    
  })
  
  export const removeItemFromFavList = (company) => ({
    type: REMOVE_ITEM_FROM_FAV,
    payload: company,
  })
  