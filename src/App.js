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
			text: 'Where was Ian born?',
			choices: [
				'Ellensburg',
				'Spokane',
				'Seattle',
				'Naches'
			],
			answer: 3,
			questionId: 12345,
		}],
		questionAndAnswerDuration: 10000,
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
