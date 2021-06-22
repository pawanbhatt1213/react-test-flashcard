import React from 'react';
import { shallow, mount } from "enzyme";
import * as redux from "react-redux";

import Stack from './Stack';
import { stacks } from './mocks/mock';

describe("Testing stack component", () => {
    const dispatch = jest.spyOn(redux, "useSelector");
    dispatch.mockReturnValue(stacks[0]);    

    const component = mount(<Stack />);

    test("should render the stack header", () => {
        const heading = component.find("h2").text();
        expect(heading).toEqual(stacks[0].title);
    });

    test("should render all the cards in the stack", () => {
        const cards = component.find("Card").length;
        expect(cards).toEqual(stacks[0].cards.length);
    });
    test("should render the question of the card", () => {
        const cards = component.find("div.col").at(0).text();
        expect(cards).toEqual(stacks[0].cards[0].prompt);
    });
});
