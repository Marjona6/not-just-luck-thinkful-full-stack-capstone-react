import React from 'react';
import {shallow, mount, render} from 'enzyme';

import Adapter from 'enzyme-adapter-react-15';

import Why from './why';

describe('<Why />', () => {
	it('Renders without crashing', () => {
		shallow(<Why />);
	});
});