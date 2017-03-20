import React, { Component } from 'react';
import { Motion, spring, presets } from 'react-motion';
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
		isFirstRun: false,
	};

	getStyle = () => {
		const { isFirstRun } = this.state;
		let messageStyle = {};
		if (isFirstRun) {
			messageStyle = {
				opacity: spring(1),
				height: spring(60, presets.wobbly),
			};
		} else {
			messageStyle = {
				opacity: spring(0),
				height: spring(0, presets.wobbly),
			};
		}

		return messageStyle;
	};

	componentDidMount() {
		if (!localStorage)
			return;

		const isFirstRun = localStorage.getItem('isFirstRun') == null;
		if (isFirstRun) {
			localStorage.setItem('isFirstRun', false);
		}

		setTimeout(() => this.setState({isFirstRun: isFirstRun}), 1000);
	}

	closeMessage = () => {
		this.setState({isFirstRun: false});
	};

	render() {
		const { questions, questionAndAnswerDuration } = this.state;

		return (
			<div className="App">
				<BibleTrivia
					questions={questions}
					questionAndAnswerDuration={questionAndAnswerDuration}
				/>
				<Motion
					defaultStyle={{height: 0, opacity: 0}}
					style={this.getStyle()}>
					{style => {
						return (
							<div id="explanation" style={style}>
								<div className="x-button" onClick={this.closeMessage}>X</div>
								This is a fun experiment to see how suitable React and React Motion are
								for animations. Enjoy! 😀😎🙃
							</div>
						);
					}}
				</Motion>
			</div>
		);
	}
}

export default App;
