import React, { Component, PropTypes } from 'react';
import Question from '../question';
import Choices from '../choices';
import CountdownTimer from '../countdown-timer';
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
		hideTimer: true,
		timerSeconds: 0,
		hideQuestion: false,
	};

	countdownIntervalId = -1;

	componentDidMount() {
		this.startQuestionLoop();
	}

	startQuestionLoop = () => {
		const { questionAndAnswerDuration } = this.props;
		setTimeout(() => this.setState({showAnswer: true, hideTimer: true, timerSeconds: 0}), questionAndAnswerDuration * (2 / 3));
		setTimeout(() => {
			this.setState({hideTimer: false, timerSeconds: Math.floor((questionAndAnswerDuration * (2 / 3)) / 1000) - 2});
			this.startTimerLoop();
		}, 2000);
		setTimeout(this.handleQuestionDone, questionAndAnswerDuration);
	};

	startTimerLoop = () => {
		this.countdownIntervalId = setInterval(() => {
			this.setState({timerSeconds: this.state.timerSeconds - 1});
		}, 1000)
	};

	handleQuestionDone = () => {
		console.log('Question is done!');

		const nextQuestionIndex = (this.state.currentQuestionIndex + 1) % this.props.questions.length;
		clearInterval(this.countdownIntervalId);
		this.setState(
			{currentQuestionIndex: nextQuestionIndex, showAnswer: false, hideQuestion: true},
			() => {
				this.setState({hideQuestion: false});
				this.startQuestionLoop();
			}
		);
	};

	render() {
		const { questions } = this.props;
		const { currentQuestionIndex, showAnswer, hideQuestion, hideTimer, timerSeconds } = this.state;
		const currentQuestion = questions[currentQuestionIndex];

		return (
			<div style={styles.container}>
				<div style={styles.leftMargin}></div>
				{!hideQuestion ?
					<div style={styles.content}>
						<Question text={currentQuestion.text} hideQuestion={hideQuestion} />
						<Choices choices={currentQuestion.choices} answer={currentQuestion.answer} showAnswer={showAnswer} />
					</div> :
					null
				}
				<CountdownTimer hide={hideTimer} seconds={timerSeconds} />
			</div>
		);
	}
}
