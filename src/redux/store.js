import {applyMiddleware, combineReducers, createStore} from "redux";
import loadingReducer from "./loading-reducer";
import settingsReducer from "./settings-reducer";
import thunkMiddleware from "redux-thunk";


const reducers = combineReducers({
    loadingPage: loadingReducer,
    settingPage: settingsReducer,
})

const store = createStore(reducers,applyMiddleware(thunkMiddleware))

export default store