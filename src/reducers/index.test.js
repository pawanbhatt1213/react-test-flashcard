import stack from './index';
import {stacks} from "../mocks/mock";
import { SET_STACK, ADD_STACK, ADD_STACKS } from "../actions/actionsType";

describe("Testing stack reducer", () => {
    test("return empty state on default", () =>{
        expect(stack(undefined,{})).toEqual({stacks: [], selectedStack: null});
    });
    test("returns correct state for action type SET_STACK", () =>{
        expect(stack(undefined,{type: SET_STACK, payload:stacks[0]})).toEqual({stacks: [], selectedStack: stacks[0]});
    });
    test("eturns correct state for action type ADD_STACK", () =>{
        expect(stack(undefined,{type: ADD_STACK, payload:stacks[0]})).toEqual({stacks: [stacks[0]], selectedStack: null});
    });
    test("eturns correct state for action type ADD_STACKS", () =>{
        expect(stack(undefined,{type: ADD_STACKS, payload:stacks})).toEqual({stacks: stacks, selectedStack: null});
    });
});