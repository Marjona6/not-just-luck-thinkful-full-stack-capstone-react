import React from 'react';
import ReactDOM from 'react-dom';

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
			    			<li><input type="checkbox" value="Optimism" /><label>Optimism</label></li>
			    			<li><input type="checkbox" value="Creativity" /><label>Creativity</label></li>
			    			<li><input type="checkbox" value="Resilience" /><label>Resilience</label></li>
			    			<li><input type="checkbox" value="Self-Control" /><label>Self-Control</label></li>
			    			<li><input type="checkbox" value="Focus" /><label>Focus</label></li>
			    			<li><input type="checkbox" value="Flexibility" /><label>Flexibility</label></li>
			    			<li><input type="checkbox" value="Vision" /><label>Vision</label></li>
			    			<li><input type="checkbox" value="Time Management" /><label>Time Management</label></li>
			    			<li><input type="checkbox" value="Communication Skills" /><label>Communication Skills</label></li>
			    			<li><input type="checkbox" value="Courage" /><label>Courage</label></li>
			    			<li><input type="checkbox" value="Generosity" /><label>Generosity</label></li>
			    			<li><input type="checkbox" value="Confidence" /><label>Confidence</label></li>
			    			<li><input type="checkbox" value="Curiosity" /><label>Curiosity</label></li>
			    			<li><input type="checkbox" value="Planning" /><label>Planning</label></li>
			    			<li><input type="checkbox" value="Balance" /><label>Balance</label></li>
			    			<li><input type="checkbox" value="Enthusiasm" /><label>Enthusiasm</label></li>
			    			<li><input type="checkbox" value="People Skills" /><label>People Skills</label></li>
			    			<li><input type="checkbox" value="Listening Skills" /><label>Listening Skills</label></li>
			    			<li><input type="checkbox" value="Empathy" /><label>Empathy</label></li>
			    			<li><input type="checkbox" value="Preparation" /><label>Preparation</label></li>
			    			<li><input type="checkbox" value="Self-Reliance" /><label>Self-Reliance</label></li>
			    			<li><input type="checkbox" value="Gratitude" /><label>Gratitude</label></li>
			    			<li><input type="checkbox" value="Forgiveness" /><label>Forgiveness</label></li>
			    			<li><input type="checkbox" value="Goal Setting" /><label>Goal Setting</label></li>
			    			<li><input type="checkbox" value="Grit" /><label>Grit</label></li>
			    			<li><input type="checkbox" value="Tenacity" /><label>Tenacity</label></li>
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