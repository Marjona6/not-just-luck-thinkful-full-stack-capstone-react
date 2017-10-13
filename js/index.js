import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

// import '../assets/css/main.css';

import Header from '../js/components/header';
import Landing from '../js/components/landing';
import Signup from '../js/components/signup';
import Signin from '../js/components/signin';
import Homepage from '../js/components/homepage';
import Why from '../js/components/why';
import How from '../js/components/how';
import What from '../js/components/what';
import When from '../js/components/when';
import Footer from '../js/components/footer';


document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<Header />,
		document.getElementById('reactHeader'));} );

document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<Landing />,
		document.getElementById('reactLanding'));} );

document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<Signup />,
		document.getElementById('reactSignup'));} );

document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<Signin />,
		document.getElementById('reactSignin'));} );

document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<Homepage />,
		document.getElementById('reactHomepage'));} );

document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<Why />,
		document.getElementById('reactWhy'));} );

document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<How />,
		document.getElementById('reactHow'));} );

document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<What />,
		document.getElementById('reactWhat'));} );

document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<When />,
		document.getElementById('reactWhen'));} );

document.addEventListener('DOMContentLoaded', () =>
	{return ReactDOM.render(<Footer />,
		document.getElementById('reactFooter'));} );