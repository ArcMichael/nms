import { combineReducers } from "redux";
import { demo } from "./demo";
import { layout } from "./layout";

const rootReducer = combineReducers({
    demo,
    layout
})

export default rootReducer;