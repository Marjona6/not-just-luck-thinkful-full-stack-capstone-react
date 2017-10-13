import React from 'react';
import ReactDOM from 'react-dom';

export default function When(props) {
    return (
		<div id="visual-when">
			<h3>WHEN?</h3>
			<p>Take a look at all the awesome stuff you've achieved!</p>
            <div id="select-date-format">
                <select name="date-format">
                    <option value="eu">DD/MM/YYYY</option>
                    <option value="us">MM/DD/YYYY</option>
                    <option value="in">YYYY/MM/DD</option>
                </select>
                <input type="submit" id="js-format-date" className="my-buttons" value="Change Date Format" />
            </div>
			<div className="timeline-container"></div>
		</div>
	)
}