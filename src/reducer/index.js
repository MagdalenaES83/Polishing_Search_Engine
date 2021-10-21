import { ADD_ITEM_TO_FAV, REMOVE_ITEM_FROM_FAV } from "../actions";
import { initialState } from "../store";

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_FAV: {
      return {
        ...state,
        list: [...state.list.fav, action.payload],
      };
    }

    case REMOVE_ITEM_FROM_FAV: {
      return {
        ...state,
        list: {
          ...state.list,
          list: state.list.fav.filter((company) => company !== action.payload),
        },
      };
    }

    default:
      return state;
  }
};

export default mainReducer;
