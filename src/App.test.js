import React from 'react';
import { mount, shallow } from 'enzyme';

import App from './App';

describe("Testing App.js", () => {
    const app = shallow(<App />);
    test("App is rendered properly!", () => {
        const title = app.find('h1').text()
        expect(title).toEqual("Flash-Card");
    });
})