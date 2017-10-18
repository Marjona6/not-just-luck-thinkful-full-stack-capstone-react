import React from 'react';
import {shallow, mount, render} from 'enzyme';

import Setup from './setup';

describe('<Setup />', () => {
	it('Renders without crashing', () => {
		shallow(<Setup />);
	});
});