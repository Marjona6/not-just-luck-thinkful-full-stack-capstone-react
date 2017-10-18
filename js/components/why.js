import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Why(props) {
    return (
		<div id="visual-why">
			<h3>WHY?</h3>
			<p>Understanding what motivates you is crucial. Here you'll find a list of what has inspired you to succeed in the past.</p>
			<div id="motivations"></div>
		</div>
	)
}