import {combineReducers} from "redux"
import reducer from "./userReducer"

const allReducers = combineReducers({state:reducer})


export default allReducers