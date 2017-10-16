import React from 'react';
import {shallow, mount} from 'enzyme';

import Signin from './signin';

describe('<Signin />', () => {
	it('Renders without crashing', () => {
		shallow(<Signin />);
	});
}