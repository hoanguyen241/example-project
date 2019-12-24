import { combineReducers } from "redux";

import demoReducer from "./demo/reducer";
import getPageValuesReducer from "./get-page-values/reducer";

export default combineReducers({
    demoReducer: demoReducer,
    getPageValuesReducer: getPageValuesReducer
})