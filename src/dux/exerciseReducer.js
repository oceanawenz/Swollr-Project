
const initialState = {
  allExercises: [],
  userlist: [],
  workoutName: ""
//   myExercises: []
}

const EXERCISE_LIST = "EXERCISE_LIST";
const USER_LIST = "USER_LIST";
const WORKOUT_NAME = "WORKOUT NAME";

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

export function addWorkoutName(input){
    return {
        type: WORKOUT_NAME,
        payload: input
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type) {
        case EXERCISE_LIST:
            return {...state, allExercises: action.payload}
        case USER_LIST:
            return {...state, userlist: [...state.userlist, action.payload]}
        case WORKOUT_NAME:
            return {...state, addWorkoutName: action.payload}
    default:
        return state;     
    }

}