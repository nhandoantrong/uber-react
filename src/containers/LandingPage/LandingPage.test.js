import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LandingPage from "./LandingPage"


Enzyme.configure({ adapter: new Adapter() });

const props = {
    history: {
        push: jest.fn()
    }
}

describe("Test LandingPage", () => {
    it("Render Landing Page", () => {
        
        shallow(<LandingPage {...props} />);

    })
    test("button Clicked", () => {
        

        const landingPage = shallow(<LandingPage {...props} />);
        landingPage.find("button").simulate("click");
        expect(props.history.push).toBeCalled()
    })
})