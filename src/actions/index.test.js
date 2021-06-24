import {stacks} from '../mocks/mock';
import * as actions from './index';
import { SET_STACK, ADD_STACK, ADD_STACKS } from "./actionsType";

describe("Testing the actions", () => {
    test("setStock action return correct action object", () => {
        const expected = {type: SET_STACK, payload: stacks[0]};
        expect(actions.setStock(stacks[0])).toEqual(expected);
    });
    test("setStocks action return correct action object", () => {
        const expected = {type: ADD_STACKS, payload: stacks};
        expect(actions.setStocks(stacks)).toEqual(expected);
    });
    test("addStack action return correct action object", () => {
        const expected = {type: SET_STACK, payload: stacks[0]};
        expect(actions.setStock(stacks[0])).toEqual(expected);
    });
});