
const initialState = {
allExercises: [],
  userlist: []
}

const EXERCISE_LIST = "EXERCISE_LIST";
const USER_LIST = "USER_LIST";


export function addExerciseList(item) {
    return {
        type: EXERCISE_LIST,
        payload: item
    }
}
export function addUserList(item) {
    return {
        type: USER_LIST,
        payload: item
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case EXERCISE_LIST:
            return {...state, allExercises: action.payload}
        case USER_LIST:
            return {...state, userlist: action.payload}
    default:
        return state;     
    }

}