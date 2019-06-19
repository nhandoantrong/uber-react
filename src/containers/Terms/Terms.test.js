import React from 'react';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Terms from "./Terms"


Enzyme.configure({ adapter: new Adapter() });

it('renders Terms without crashing', () => {
  
     mount(<Terms />)
});
