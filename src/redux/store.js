import { createStore, applyMiddleware } from 'redux';
import reducers from "../redux/reducers";
import thunk from 'redux-thunk';


const configureStore = () => {
    return createStore(reducers, applyMiddleware(thunk));
};
export default configureStore;
