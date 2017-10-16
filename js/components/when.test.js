import React from 'react';
import {shallow, mount} from 'enzyme';

import When from './when';

describe('<When />', () => {
	it('Renders without crashing', () => {
		shallow(<When />);
	});
}