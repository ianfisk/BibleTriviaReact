import React, { Component } from 'react';
import BibleTrivia from './bible-trivia';
import './App.css';

class App extends Component {
	state = {
		questions: [{
			text: 'Where was Jesus born?',
			choices: [
				'Bellingham',
				'Bethlehem',
				'Tel Aviv',
				'Paris'
			],
			answer: 1,
			questionId: 1234,
		},
		{
			text: 'How many books are in the New Testament?',
			choices: [
				'26',
				'64',
				'27',
			],
			answer: 2,
			questionId: 12345,
		},
		{
			text: 'What type of insect did John the Baptist eat in the desert?',
			choices: [
				"He didn't eat any insects.",
				'Crickets',
				'Locusts',
			],
			answer: 2,
			questionId: 12345,
		},
		{
			text: 'Matthew was a _________.',
			choices: [
				'Man',
				'Tax collector',
				'Baker',
				'Nomad'
			],
			answer: 1,
			questionId: 12345,
		}],
		questionAndAnswerDuration: 8000,
	};

	render() {
		const { questions, questionAndAnswerDuration } = this.state;

		return (
			<div className="App">
				<BibleTrivia
					questions={questions}
					questionAndAnswerDuration={questionAndAnswerDuration}
				/>
			</div>
		);
	}
}

export default App;
