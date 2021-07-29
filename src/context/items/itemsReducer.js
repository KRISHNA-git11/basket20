import {
  ADD_ITEM,
  GET_ITEMS,
  CLEAR_ITEMS,
  SET_LOADING,
  SET_COUNT,
  CART_ITEMS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    case SET_COUNT:
      return {
        ...state,
        items: state.items.filter((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case CART_ITEMS:
      return {
        ...state,
        cartItems: action.payload.filter((item) => item.count > 0 && item),
        loading: false,
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case CLEAR_ITEMS:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
