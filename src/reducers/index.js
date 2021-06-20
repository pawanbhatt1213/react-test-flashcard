import { SET_STACK, ADD_STACKS, ADD_STACK } from "../actions/actionsType";

const initialState = {stacks: [], selectedStack: null}

export default function stack(state=initialState, action) {
    switch(action.type){

        case SET_STACK:
            return {...state, selectedStack: action.payload}

        case ADD_STACKS:
            return {...state, stacks: action.payload}

        case ADD_STACK:
            return {...state, stacks:[...state.stacks, action.payload]}

        default:
            return {...state}
    }
}