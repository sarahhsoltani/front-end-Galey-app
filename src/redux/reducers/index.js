import {combineReducers} from "redux"
import userReducer from "./users"
export const rootReducers= combineReducers ({userReducer})