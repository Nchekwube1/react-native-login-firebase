import {createStore,applyMiddleware}from "redux"
import thunk from "redux-thunk"
import allReducers from "./reducer"

export const store = createStore(allReducers,{},applyMiddleware(thunk))