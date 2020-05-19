import {Theme_black, Theme_classic} from "../styles/styles";
const STYLE = "STYLE"
const CHANGE_ISDONE = "CHANGE_ISDONE"


let initialState = {
  style: Theme_classic,
  themeClassic: Theme_classic,
  themeBlack: Theme_black,
  isDone: true
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
    default:
      return state
  }
}


export const theme = (newStyle) => ({type: STYLE, newStyle})
export const changeIsDone = (isDone) => ({type: CHANGE_ISDONE, isDone})



export default settingsReducer;


