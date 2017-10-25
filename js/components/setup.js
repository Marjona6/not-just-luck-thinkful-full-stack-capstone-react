import 'core-js/es6/map';
import 'core-js/es6/set';

import React from 'react';
import ReactDOM from 'react-dom';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

export default function Setup(props) {
    return (
		<section id="account-setup-page">
    		<h2>Let's Get Started!</h2>
    		<div id="account-setup-blurb">
    			<p>Let's start by setting up your account.</p>
    		</div>
    		<div id="add-new-blurb">
    			<p>Let's add another achievement to your list!</p>
    		</div>
            <div id="add-details">
    			<p>First, think of something you've accomplished that you're particularly proud of. What did you do? What skills did you use?</p>
    			<p>Finally, think about why this accomplishment is meaningful to you. Did you help someone? Make a difference? Do something everyone told you you could never do?</p>
            </div>
    		<form id="input-form">
    			<h3>What did you achieve?</h3>
    				<p>Briefly describe your big achievement.</p>
    				<input id="achieve-what" type="text" placeholder="I built a schoolhouse." />
    			<h3>How did you achieve it?</h3>
	    			<p>What specific skills or character traits did you draw on?</p>
	    			<fieldset>
	    				<ul className="checkbox">
			    			<li><input type="checkbox" className="skill" id="cb01" value="Optimism" /><label for="cb01">Optimism</label></li>
			    			<li><input type="checkbox" className="skill" id="cb02" value="Creativity"/><label for="cb02">Creativity</label></li>
			    			<li><input type="checkbox" className="skill" id="cb03" value="Resilience" /><label for="cb03">Resilience</label></li>
			    			<li><input type="checkbox" className="skill" id="cb04" value="Self-Control" /><label for="cb04">Self-Control</label></li>
			    			<li><input type="checkbox" className="skill" id="cb05" value="Focus" /><label for="cb05">Focus</label></li>
			    			<li><input type="checkbox" className="skill" id="cb06" value="Flexibility" /><label for="cb06">Flexibility</label></li>
			    			<li><input type="checkbox" className="skill" id="cb07" value="Vision" /><label for="cb07">Vision</label></li>
			    			<li><input type="checkbox" className="skill" id="cb08" value="Time Management" /><label for="cb08">Time Management</label></li>
			    			<li><input type="checkbox" className="skill" id="cb09" value="Communication Skills" /><label for="cb09">Communication Skills</label></li>
			    			<li><input type="checkbox" className="skill" id="cb10" value="Courage" /><label for="cb10">Courage</label></li>
			    			<li><input type="checkbox" className="skill" id="cb11" value="Generosity" /><label for="cb11">Generosity</label></li>
			    			<li><input type="checkbox" className="skill" id="cb12" value="Confidence" /><label for="cb12">Confidence</label></li>
			    			<li><input type="checkbox" className="skill" id="cb13" value="Curiosity" /><label for="cb13">Curiosity</label></li>
			    			<li><input type="checkbox" className="skill" id="cb14" value="Planning" /><label for="cb14">Planning</label></li>
			    			<li><input type="checkbox" className="skill" id="cb15" value="Balance" /><label for="cb15">Balance</label></li>
			    			<li><input type="checkbox" className="skill" id="cb16" value="Enthusiasm" /><label for="cb16">Enthusiasm</label></li>
			    			<li><input type="checkbox" className="skill" id="cb17" value="People Skills" /><label for="cb17">People Skills</label></li>
			    			<li><input type="checkbox" className="skill" id="cb18" value="Listening Skills" /><label for="cb18">Listening Skills</label></li>
			    			<li><input type="checkbox" className="skill" id="cb19" value="Empathy" /><label for="cb19">Empathy</label></li>
			    			<li><input type="checkbox" className="skill" id="cb20" value="Preparation" /><label for="cb20">Preparation</label></li>
			    			<li><input type="checkbox" className="skill" id="cb21" value="Self-Reliance" /><label for="cb21">Self-Reliance</label></li>
			    			<li><input type="checkbox" className="skill" id="cb22" value="Gratitude" /><label for="cb22">Gratitude</label></li>
			    			<li><input type="checkbox" className="skill" id="cb23" value="Forgiveness" /><label for="cb23">Forgiveness</label></li>
			    			<li><input type="checkbox" className="skill" id="cb24" value="Goal Setting" /><label for="cb24">Goal Setting</label></li>
			    			<li><input type="checkbox" className="skill" id="cb25" value="Grit" /><label for="cb25">Grit</label></li>
			    			<li><input type="checkbox" className="skill" id="cb26" value="Tenacity" /><label for="cb26">Tenacity</label></li>
		    		    </ul>
                    </fieldset>
    			<h3>When did you achieve it?</h3>
    				<p>A rough estimate is fine here.</p>
                        <input type="text" id="datepicker" placeholder="Date of your accomplishment" />
    			<h3>Why is it meaningful to you?</h3>
    				<p>Why is this accomplishment something you feel proud of?</p>
    				<input id="achieve-why" type="textarea" placeholder="I helped people in need." />
	    		<input type="submit" id="js-submit-accomplishment" className="my-buttons" value="I Did This!" />
	    	</form>
    	</section>
	)
}