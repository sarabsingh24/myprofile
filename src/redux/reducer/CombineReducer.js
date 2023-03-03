import { combineReducers } from "redux";
import createCountReducer from "../reducer/Reducer";

const rootReducer = combineReducers({ createCountReducer });

export default rootReducer;