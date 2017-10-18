import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function How(props) {
    return (
		<div id="visual-how">
			<h3>HOW?</h3>
			<p>"First, know thyself." Being aware of your best traits and strongest skills can help you overcome the naysayers.</p>
            <div id="traits"></div>
		</div>
	)
}