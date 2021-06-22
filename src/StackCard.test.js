import React from "react";
import { mount } from "enzyme";
import StackCard from "./StackCard";
import { stacks } from "./mocks/mock";


describe("test StackCard component", () => {

    const component = mount(<StackCard card={stacks[0].cards[0]} />);
    test("component should show prompt", () => {
        const prompt = component.find("Col").text();
        expect(prompt).toEqual(stacks[0].cards[0].prompt);
    });

    test("component should show answer on click", () => {
        component.find("Card").simulate("click");
        const answer = component.find("Col").at(1).text();
        expect(answer).toEqual(stacks[0].cards[0].answer)
    });

});