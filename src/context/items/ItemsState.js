import { useReducer } from 'react';
import ItemsContext from './itemsContext';
import itemsReducer from './itemsReducer';
import {
  ADD_ITEM,
  GET_ITEMS,
  CLEAR_ITEMS,
  SET_LOADING,
  ITEMS_ERROR,
  SET_COUNT,
  CART_ITEMS,
} from '../types';

const ItemsState = (props) => {
  const initialState = {
    items: null,
    cartItems: [],
    loading: false,
    error: null,
  };

  const [state, dispatch] = useReducer(itemsReducer, initialState);

  //Get items
  const getItems = async () => {
    setLoading();
    try {
      const res = await fetch('http://localhost:5000/items');
      const data = await res.json();
      dispatch({
        type: GET_ITEMS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ITEMS_ERROR,
        payload: 'error',
      });
    }
  };
  //Set count
  const setCount = async (item) => {
    try {
      const res = await fetch(`http://localhost:5000/items/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      dispatch({
        type: SET_COUNT,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ITEMS_ERROR,
        payload: 'error',
      });
    }
  };
  //Cart items
  const getCartItems = async () => {
    setLoading();
    const res = await fetch('http://localhost:5000/items');
    const data = await res.json();
    dispatch({
      type: CART_ITEMS,
      payload: data,
    });
  };
  //Add items
  const addItems = async (item) => {
    console.log(item);
    try {
      const res = await fetch('http://localhost:5000/items', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      dispatch({
        type: ADD_ITEM,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: ITEMS_ERROR,
        payload: 'error',
      });
    }
  };

  //Clear items
  const clearItems = () => {
    dispatch({
      type: CLEAR_ITEMS,
    });
  };
  //Set Loading
  const setLoading = () => {
    dispatch({
      type: SET_LOADING,
    });
  };
  return (
    <ItemsContext.Provider
      value={{
        items: state.items,
        loading: state.loading,
        error: state.error,
        cartItems: state.cartItems,
        getItems,
        setCount,
        getCartItems,
        addItems,
        clearItems,
      }}
    >
      {props.children}
    </ItemsContext.Provider>
  );
};

export default ItemsState;
