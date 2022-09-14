import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { productsReducer, selectedProductsReducer } from "./productsReducer";

function counter(state = 0, action) {
  switch (action.type)
  {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}
const reducers = combineReducers({
  counter,
  allProducts: productsReducer,
  product: selectedProductsReducer,
  auth: authReducer

});
export default reducers;
