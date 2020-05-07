const STYLE_CLASSIC = "STYLE_CLASSIC"
const STYLE_BlACK = "STYLE_BlACK"

let initialState = {
  style: "containerClassic"
}

const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case STYLE_CLASSIC:
      return {
        ...state, style: "containerClassic"
      }
    case STYLE_BlACK:
      return {
        ...state, style: "containerBlack"
      }

    default:
      return state
  }
}


export const styleClassic = () => ({type: STYLE_CLASSIC})
export const styleBlack = () => ({type: STYLE_BlACK})


export default settingsReducer;