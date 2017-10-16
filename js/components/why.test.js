import React from 'react';
import {shallow, mount} from 'enzyme';

import Why from './why';

describe('<Why />', () => {
	it('Renders without crashing', () => {
		shallow(<Why />);
	});
}