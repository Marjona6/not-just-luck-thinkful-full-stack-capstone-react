import React from 'react';
import {shallow, mount} from 'enzyme';

import What from './what';

describe('<What />', () => {
	it('Renders without crashing', () => {
		shallow(<What />);
	});
}