import { combineReducers } from "redux";
import productReducer from "./productReducer";
import {countReducer} from "./reducer";

export default combineReducers({
    count:countReducer,
    users:productReducer
    
});