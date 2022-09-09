import { createStore } from 'redux';
import reducers from "../redux/reducers";

const configureStore = () => {
    return createStore(reducers);
};
export default configureStore;


// import { configureStore } from "@reduxjs/toolkit";
// import reducers from "../redux/reducers";

// import { createStore } from 'redux';

// const configureStore = () => {
//     return createStore(reducers);
// };
// export default configureStore;

// import { configureStore } from "@reduxjs/toolkit";
// import reducers from "../redux/reducers";
// // import consentSaga from "../redux/reducers/consentSaga";
// // import createSagaMiddleware from 'redux-saga';

// // const sagaMiddleware = createSagaMiddleware();
// export const store = configureStore({
//     reducer: reducers,
//     // middleware: () => [sagaMiddleware]
// });
// // sagaMiddleware.run(consentSaga);