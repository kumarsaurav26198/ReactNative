import { ActionTypes } from '../constants/actiontypes';


export const setProducts = (products = []) => {
  console.warn("Action", ActionTypes.SET_PRODUCTS);

  return {

    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

