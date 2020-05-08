import {Theme_classic} from "../styles/styles";
const STYLE = "STYLE"


let initialState = {
  style: Theme_classic,

}

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STYLE:
      return {
        ...state, style: action.newStyle
      }
    default:
      return state
  }
}


export const theme = (newStyle) => ({type: STYLE, newStyle})



export default settingsReducer;


