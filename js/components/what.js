import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function What(props) {
    return (
		<div id="visual-what">
			<h3>WHAT?</h3>
			<p>You can't be an impostor. Just look at all this awesome stuff you've done!</p>
            <div id="awesome-stuff"></div>
		</div>
	)
}