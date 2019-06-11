const initialState = {
    user: null
}

const SAVE_USER = "SAVE_USER";

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case SAVE_USER:
            return {...state, user: action.payload}




    default:
        return state;     
    }

}

