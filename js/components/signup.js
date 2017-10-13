import React from 'react';
import ReactDOM from 'react-dom';

export default class Signup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	doSignup(event) {
		event.preventDefault();
		event.stopPropagation();
		var fname = this.refs.fname.value;
		var uname = this.refs.uname.value;
		var pw = this.refs.pw.value; // need to encrypt/hash this
		var confirmPw = this.refs.confirmPw.value; // also encrypt but later
		console.log(fname, uname, pw, confirmPw);
	}
	
	render() {
	    return (
			<section id="account-signup-page">
	    		<h3>Start My Best Life Now</h3>
	    		<p>You can overcome Impostor Syndrome and achieve your goals with confidence.</p>
	    		<form id="new-account-form" method="post">
	  				<p>First name:</p>
	    			<input type="text" name="fname" ref="fname" defaultValue={this.props.fname} required />
	    			<p>Username:</p>
	    			<input type="text" name="uname" ref="uname" defaultValue="charlene123" required />
	    			<p>Password:</p>
	    			<input type="password" name="pw" ref="pw" defaultValue="1234" required />
	    			<p>Confirm password:</p>
	    			<input type="password" name="confirmPw" ref="confirmPw" defaultValue="1234" required />
	    			<input id="js-new-account" className="my-buttons" onClick={this.doSignup(event)} value="Let's Do This!" />
	    		</form>
	    	</section>
	    );
	}
}

Signup.defaultProps = {
	fname: 'Charlene'
};

// var RepositoryList = React.createClass({
//     addRepository: function() {
//         var repositoryName = this.refs.repositoryName.value;
//         // TODO: Add the repository to the state
//         console.log(this.props);
//         this.props.dispatch(
//             actions.addRepository(repositoryName)
//         );
//     },
//     render: function() {
//         var repositories = this.props.repositories.map(function(repository) {
//             return <Repository repository={repository} key={repository.name} />;
//         });

//         return (
//             <div className="repository-list">
//                 {repositories}
//                 <input type="text" ref="repositoryName" />
//                 <button type="button" onClick={this.addRepository}>
//                     Add repository
//                 </button>
//             </div>
//         );
//     }
// });

// export class GuessForm extends React.Component {
//     submitGuess(event) {
//         event.preventDefault();
//         const value = this.input.value;
//         this.props.dispatch(makeGuess(value));
//     }

//     render() {
//         return (
//             <form onSubmit={e => this.submitGuess(e)}>
//                 <label htmlFor="userGuess">Enter your guess!</label>
//                 <input type="text" name="userGuess" id="userGuess"
//                     className="text" maxLength="3" autoComplete="off"
//                     placeholder={Math.round(Math.random() * 100)} required
//                     ref={input => this.input = input} />
//                 <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
//             </form>
//         );
//     }
// };