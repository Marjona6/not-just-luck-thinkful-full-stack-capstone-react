import React from 'react';
import {shallow, mount} from 'enzyme';

import How from './how';

describe('<How />', () => {
	it('Renders without crashing', () => {
		shallow(<How />);
	});
}