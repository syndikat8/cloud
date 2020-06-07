import {Theme_black, Theme_classic} from "../styles/styles";
import {API, tryCatch} from "../api/api";

const STYLE = "STYLE"
const CHANGE_ISDONE = "CHANGE_ISDONE"
const CHANGE_CUTOUT = "CHANGE_CUTOUT"
const UNERROR = "UNERROR"
const ERROR = "ERROR"


let initialState = {
  style: Theme_classic,
  themeClassic: Theme_classic,
  themeBlack: Theme_black,
  isDone: null,
  cutout: false,
  unError: null,
  error: null
}

const settingsReducer = (state = initialState, action) => {
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


export const theme = (newStyle) => ({type: STYLE, newStyle})
export const changeIsDone = (isDone) => ({type: CHANGE_ISDONE, isDone})
export const changeCutout = (cutout) => ({type: CHANGE_CUTOUT, cutout})
export const changeUnError = (unError) => ({type: UNERROR, unError})
export const changeError = (error) => ({type: ERROR, error})


export const setStasus = (isDone) => (dispatch) => {

  tryCatch(() => API.f(isDone)).then(res => {
    if (res.status === 200) {
      dispatch(changeUnError(true))
    } else {
      dispatch(changeError(true))
    }
    dispatch(changeCutout(false))
  })
}


export default settingsReducer;


