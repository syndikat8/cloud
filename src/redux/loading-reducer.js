const SET_LOADING = "SET_LOADING"


let initialState = {
  loading: true
}

const loadingReducer = (state = initialState, action) => {
 switch (action.type) {
   case SET_LOADING:
     return {
       ...state, loading: action.loading
     }
   default:
     return state
 }

}

export const setLoading = (loading) => ({type:SET_LOADING, loading})


export default loadingReducer;