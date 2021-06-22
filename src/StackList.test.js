import React from "react";
import { shallow } from 'enzyme';
import * as redux from 'react-redux';

import StackList from './StackList';
import { stacks } from "./mocks/mock";

describe("Testing StackList.js", () => {
    const spy = jest.spyOn(redux, 'useSelector')
    spy.mockReturnValue(stacks);
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch'); 
    const mockDispatchFn = jest.fn();
    useDispatchSpy.mockReturnValue(mockDispatchFn);
    const component = shallow(<StackList />);
    
    test("renders create new link", ()=>{
        const linkText = component.find('Link').at(0).text(); 
        expect(linkText).toEqual("ADD NEW STACK");
    });

    test("renders all the stacks", ()=>{
        const linkText = component.find('Card').length; 
        expect(linkText).toEqual(stacks.length);
    });

    test("renders the heading of stacks", ()=>{
        const linkText = component.find('Card').at(0).text(); 
        expect(linkText).toEqual(stacks[0].title);
    });
})