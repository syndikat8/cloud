import {applyMiddleware, combineReducers, createStore} from "redux";
import loadingReducer from "./loading-reducer";
import settingsReducer from "./settings-reducer";
import thunkMiddleware from "redux-thunk";


const rootReducer = combineReducers({
    loadingPage: loadingReducer,
    settingPage: settingsReducer,
})


type rootReducerType = typeof rootReducer
export type AppStateType = ReturnType<rootReducerType>

const store = createStore(rootReducer,applyMiddleware(thunkMiddleware))

export default store