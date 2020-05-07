import {combineReducers, createStore} from "redux";
import loadingReducer from "./loading-reducer";
import settingsReducer from "./settings-reducer";



const reducers = combineReducers({
    loadingPage: loadingReducer,
    settingPage: settingsReducer,
})

const store = createStore(reducers)

export default store