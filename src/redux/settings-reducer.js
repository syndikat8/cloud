import {Theme_black, Theme_classic} from "../styles/styles";
const STYLE = "STYLE"
const CHANGE_ISDONE = "CHANGE_ISDONE"
const CHANGE_CUTOUT = "CHANGE_CUTOUT"


let initialState = {
  style: Theme_classic,
  themeClassic: Theme_classic,
  themeBlack: Theme_black,
  isDone: true,
  cutout: false,
}

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STYLE:
      return {
        ...state, style: action.newStyle
      }
    case  CHANGE_ISDONE:
      return {
        ...state, isDone: action.isDone
      }
    case  CHANGE_CUTOUT:
      return {
        ...state, cutout: action.cutout
      }
    default:
      return state
  }
}


export const theme = (newStyle) => ({type: STYLE, newStyle})
export const changeIsDone = (isDone) => ({type: CHANGE_ISDONE, isDone})
export const changeCutout = (cutout) => ({type: CHANGE_CUTOUT, cutout})



export default settingsReducer;


