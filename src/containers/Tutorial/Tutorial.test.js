import React from 'react';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Tutorial from "./Tutorial"


Enzyme.configure({ adapter: new Adapter() });

it('renders Tutorial without crashing', () => {
  
     mount(<Tutorial />)
});
