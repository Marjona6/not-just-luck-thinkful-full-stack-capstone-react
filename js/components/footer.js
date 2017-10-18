import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Footer(props) {
	return (
		<footer>
            <ul>
                <li><p>&#xa9; 2017 Meryem Yanar</p></li>
                <li><a href="https://github.com/Marjona6" title="Check out my code on GitHub">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/marjona6/" title="Connect with me on LinkedIn">LinkedIn</a></li>
                <li><a href="mailto:meryem.yanaryanar@gmail.com?Subject=Hello" title="Send me an email">Email</a></li>
            </ul>
        </footer>
	)
}