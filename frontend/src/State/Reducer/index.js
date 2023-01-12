import { combineReducers } from "redux";
import Reducer from './Reducer';
import Data from './Data';


const reducers = combineReducers({
    token:Reducer,
    data:Data
    
});

export default reducers;