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
			<section id="account-signup-page">
	    		<h3>Start My Best Life Now</h3>
	    		<p>You can overcome Impostor Syndrome and achieve your goals with confidence.</p>
	            <p>To try it out, <a href="#">sign in</a> with username "demo" and password "demo".</p>
	    		<form id="new-account-form" method="post">
	  				<p>First name:</p>
	    			<input type="text" name="fname" required />
	    			<p>Username:</p>
	    			<input type="text" name="uname" required />
	    			<p>Password:</p>
	    			<input type="password" name="pw" required />
	    			<p>Confirm password:</p>
	    			<input type="password" name="confirm-pw" required />
	    			<input type="submit" id="js-new-account" className="my-buttons" value="Let's Do This!" />
	    		</form>
	    	</section>
	    );
	}
}