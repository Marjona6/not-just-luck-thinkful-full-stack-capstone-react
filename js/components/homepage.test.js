import React from 'react';
import {shallow, mount, render} from 'enzyme';

import Homepage from './homepage';

describe('<Homepage />', () => {
	it('Renders without crashing', () => {
		shallow(<Homepage />);
	});
});