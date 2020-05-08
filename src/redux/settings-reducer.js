const STYLE = "STYLE"


let initialState = {
  style: "containerClassic"
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


export const styles = (newStyle) => ({type: STYLE, newStyle})



export default settingsReducer;


