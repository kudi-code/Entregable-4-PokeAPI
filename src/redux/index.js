const INITIAL_STATE = {
    userName:""
}

const reducer = (state = INITIAL_STATE, action) => {
	switch(action.type){
    case "GET_USERNAME":
        return {
            ...state, 
            userName: action.payload //payload es donde se manda el name
        }
        
        
    default:
	    return state;
  }
}

export default reducer;