import React, { Component, PropTypes } from 'react';
import Question from '../question';
import Choices from '../choices';
import { styles } from './styles';

export default class BibleTrivia extends Component {
	static propTypes = {
		questions: PropTypes.arrayOf(PropTypes.shape({
			text: PropTypes.string.isRequired,
			choices: PropTypes.arrayOf(PropTypes.string).isRequired,
			questionId: PropTypes.number.isRequired,
			answer: PropTypes.number.isRequired,
		})),
		questionAndAnswerDuration: PropTypes.number.isRequired,
	};

	static defaultProps = {
		questions: [],
	};

	state = {
		currentQuestionIndex: 0,
		showAnswer: false,
	};

	componentDidMount() {
		const { questionAndAnswerDuration } = this.props;
		setTimeout(() => this.setState({showAnswer: true}), questionAndAnswerDuration * (2 / 3));
	}

	render() {
		const { questions } = this.props;
		const { currentQuestionIndex, showAnswer } = this.state;
		const currentQuestion = questions[currentQuestionIndex];

		return (
			<div style={styles.container}>
				<div style={styles.leftMargin}></div>
				<div style={styles.content}>
					<Question text={currentQuestion.text} />
					<Choices choices={currentQuestion.choices} answer={currentQuestion.answer} showAnswer={showAnswer} />
				</div>
			</div>
		);
	}
}
