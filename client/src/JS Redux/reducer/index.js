import { combineReducers } from "redux";
import {productReducer} from './productReducer'
import {editReducer} from './editReducer'
import { authReducer } from './authReducer'

const rootReducer = combineReducers({productReducer, editReducer, authReducer});

export default rootReducer;