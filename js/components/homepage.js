import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default class Homepage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<section id="user-home-page">
	    		<h2>Hello, Smarty Pants!</h2>
	    			<p>Welcome to your home page! From here, you can view past successes or add new ones. Go you!</p>
	                <p>To edit or delete your past accomplishments, click on them from the timeline.</p>
	    		<div id="visualized-home">
	    			<div id="the-why">
	    				<a href="#"><h3>WHY?</h3></a>
	    				<p>my motivations</p>
	    			</div>
	    			<div id="the-how">
	    				<a href="#"><h3>HOW?</h3></a>
	    				<p>my qualities and skills</p>
	    			</div>
	    			<div id="user-avatar"></div>
	    			<div id="the-what">
	    				<a href="#"><h3>WHAT?</h3></a>
	    				<p>my achievements</p>
	    			</div>
	    			<div id="the-when">
	    				<a href="#"><h3>WHEN?</h3></a>
	    				<p>my timeline</p>
	    			</div>
	    		</div>
	    		<input type="submit" method="post" id="js-add-accomplishment" className="my-buttons" defaultValue="Add An Accomplishment" />
	    	</section>
	    )
	}
}

