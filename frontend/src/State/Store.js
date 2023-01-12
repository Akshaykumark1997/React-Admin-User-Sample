import { legacy_createStore as createStore,applyMiddleware } from "redux";
import Reducer from './Reducer/index';
import thunk from "redux-thunk";

export const store = createStore(
    Reducer,
    {},
    applyMiddleware(thunk)
);
