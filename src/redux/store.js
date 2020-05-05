import {combineReducers, createStore} from "redux";
import loadingReducer from "./loading-reducer";



const reducers = combineReducers({
    loadingPage: loadingReducer,
})

const store = createStore(reducers)

export default store