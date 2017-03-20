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
			questionId: 1234,
		},
		{
			text: 'Where was Ian born?',
			choices: [
				'Ellensburg',
				'Spokane',
				'Seattle',
				'Naches'
			],
			questionId: 12345,
		}],
		showQuestion: false,
		showAnswer: false,
		showLeaderboard: false,
	}

	componentDidMount() {
		setTimeout(() => this.setState({ showQuestion: true }), 1000);
	}

  render() {
		const { questions, showQuestion, showAnswer } = this.state;

    return (
      <div className="App">
        <BibleTrivia questions={questions} showQuestion={showQuestion} showAnswer={showAnswer} />
      </div>
    );
  }
}

export default App;
