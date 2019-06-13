// import axios from 'axios';


const initialState = {
    user: null,
    username: "",
    email: "",
    password: ""
    
}


const SAVE_USER = "SAVE_USER";



export function saveUser(user) {
    return {
        type: SAVE_USER,
        payload: user
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case SAVE_USER:
            return {...state, user: action.payload}




    default:
        return state;     
    }

}

