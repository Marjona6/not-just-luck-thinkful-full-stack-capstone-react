import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<section id="signin-page">
	    		<h3>Sign in to My Account</h3>
	    		<form>
	    			<p>Username:</p>
	    			<input name="signin-uname" defaultValue="charlene123" type="text" required />
	    			<p>Password:</p>
	    			<input name="signin-pw" defaultValue="1234" type="password" required />
	    			<input type="submit" id="js-signin-button" className="my-buttons" value="Sign In" />
	    		</form>
	    	</section>
		)
	}
}
		