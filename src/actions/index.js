import { ADD_STACKS, SET_STACK, ADD_STACK } from "./actionsType";

export function setStock(stack) {
    return  {
        type: SET_STACK,
        payload: stack
    }
}

export function setStocks(stacks) {
    return  {
        type: ADD_STACKS,
        payload: stacks
    }
}

export function addStack(stack) {
    return {
        type: ADD_STACK,
        payload: stack
    }
}