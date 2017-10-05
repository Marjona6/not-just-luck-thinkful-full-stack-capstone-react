import React from 'react';
import ReactDOM from 'react-dom';

export default function Landing(props) {
    return (
        <section id="landing-page">
    		<div id="hero">
    			<div id="hero-blurb">
		    		<p>Kiss impostor syndrome goodbye.</p>
		    	</div>
    		</div>
    		<div id="block-1" className="landing-block">
    			<div className="landing-image"></div>
    			<div className="landing-blurb">
		    		<p>You worked hard to get to where you are today.</p>
		    		<p>Not Just Luck reminds you.</p>
		    	</div>
    		</div>
    		<div id="block-2" className="landing-block">
    			<div className="landing-blurb">
		    		<p>Tell Not Just Luck about some of your successes and achievements.</p>
		    	</div>
		    	<div className="landing-image"></div>
    		</div>
    		<div id="block-3" className="landing-block">
    			<div className="landing-image"></div>
    			<div className="landing-blurb">
			    	<p>Look at your skills, character traits, and accomplishments anytime you need a reminder.</p>
			    	<p>You did this. It's Not Just Luck.</p>
			    </div>
    		</div>
    	</section>
    )
}