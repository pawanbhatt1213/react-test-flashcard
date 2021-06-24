import React from 'react';
import * as redux from "react-redux";
import { shallow, mount } from "enzyme";
import { BrowserRouter } from "react-router-dom";

import StackForm from "./StackForm";

describe("testing StackForm component", () => {
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch'); 
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatchFn);
    
    const component = mount(<BrowserRouter>
        <StackForm />
    </BrowserRouter>);

    test("renders all stack link", ()=>{
        const linkText = component.find('Link').at(0).text(); 
        expect(linkText).toEqual("ALL STACK");
    });

    test("renders the form", () => {
        expect(component.find("Form").exists()).toBeTruthy();
    });

    test("renders submit button", () => {
        const button = component.find("Button").last().text();
        expect(button).toEqual("Submit Stack")
    });

    test("renders + button", () => {
        const button = component.find("Button").first().text();
        expect(button).toEqual("+")
    });

    test("adds input fields on click of + button", () => {
        const button = component.find("Button").at(0);
        expect(button.text()).toEqual("+");
        button.simulate("click");
        const promptInput = component.find("input").filter({name: "prompt"});
        expect(promptInput).toHaveLength(2);
        const ansInput = component.find("input").filter({name: "answer"});
        expect(ansInput).toHaveLength(2);
    });
    test("removes input fields on click of - button", () => {
        const button = component.find("Button").at(0);
        expect(button.text()).toEqual("--");
        button.simulate("click");
        const promptInput = component.find("input").filter({name: "prompt"});
        expect(promptInput).toHaveLength(1);
        const ansInput = component.find("input").filter({name: "answer"});
        expect(ansInput).toHaveLength(1);
    });

    test("handler is called on form submit", () => {
        component.find("input").at(0).simulate("change",{target: {value: "testing text"}});
        expect(component.find("input").at(0).instance().value).toEqual("testing text");
    })
})