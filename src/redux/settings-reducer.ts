import {Theme_black, Theme_classic} from "../styles/styles";
import {API, tryCatch} from "../api/api";
import {Dispatch} from "redux";
import {SetLoading} from "./loading-reducer";

const STYLE = "STYLE"
const CHANGE_ISDONE = "CHANGE_ISDONE"
const CHANGE_CUTOUT = "CHANGE_CUTOUT"
const UNERROR = "UNERROR"
const ERROR = "ERROR"


type InitialStateType = {
    style: typeof Theme_classic
    themeClassic: typeof Theme_classic
    themeBlack: typeof Theme_black
    isDone: boolean
    cutout: boolean
    unError: boolean
    error: boolean
}

let initialState: InitialStateType = {
    style: Theme_classic,
    themeClassic: Theme_classic,
    themeBlack: Theme_black,
    isDone: false,
    cutout: false,
    unError: false,
    error: false
}

const settingsReducer = (state = initialState, action: ReducerType): InitialStateType => {
    switch (action.type) {
        case STYLE:
            return {
                ...state, style: action.newStyle
            }
        case CHANGE_ISDONE:
            return {
                ...state, isDone: action.isDone
            }
        case CHANGE_CUTOUT:
            return {
                ...state, cutout: action.cutout
            }
        case UNERROR:
            return {
                ...state, unError: action.unError
            }
        case ERROR:
            return {
                ...state, error: action.error
            }

        default:
            return state
    }
}
export default settingsReducer;

export type ReducerType =
    ThemeType
    | ChangeIsDoneType
    | ChangeCutoutType
    | ChangeUnErrorType
    | ChangeErrorType
    | SetLoading


type ThemeType = {
    type: typeof STYLE
    newStyle: string
}
export const theme = (newStyle: string): ThemeType => ({type: STYLE, newStyle})

type ChangeIsDoneType = {
    type: typeof CHANGE_ISDONE
    isDone: boolean
}
export const changeIsDone = (isDone: boolean): ChangeIsDoneType => ({type: CHANGE_ISDONE, isDone})

type ChangeCutoutType = {
    type: typeof CHANGE_CUTOUT
    cutout: boolean
}
export const changeCutout = (cutout: boolean): ChangeCutoutType => ({type: CHANGE_CUTOUT, cutout})

type ChangeUnErrorType = {
    type: typeof UNERROR
    unError: boolean
}
export const changeUnError = (unError: boolean): ChangeUnErrorType => ({type: UNERROR, unError})

type ChangeErrorType = {
    type: typeof ERROR
    error: boolean
}
export const changeError = (error: boolean): ChangeErrorType => ({type: ERROR, error})


export const setStatus = (isDone: boolean) => (dispatch: Dispatch<ReducerType>) => {

    tryCatch(() => API.f(isDone)).then(res => {
        if (res.status === 200) {
            dispatch(changeUnError(true))
        } else {
            dispatch(changeError(true))
        }
        dispatch(changeCutout(false))
    })
}





