const SET_LOADING = "SET_LOADING"

type InitialStateType = {
    loading: boolean
}

let initialState: InitialStateType = {
  loading: false
}

const settingsReducer = (state: InitialStateType = initialState, action: any) => {
 switch (action.type) {
   case SET_LOADING:
     return {
       ...state, loading: action.loading
     }
   default:
     return state
 }

}

type SetLoading = {
    type: typeof SET_LOADING
    loading: boolean
}

export const setLoading = (loading: boolean): SetLoading => ({type:SET_LOADING, loading})


export default settingsReducer;