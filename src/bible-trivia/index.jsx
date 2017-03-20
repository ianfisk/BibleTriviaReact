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
		hideQuestion: false,
	};

	componentDidMount() {
		this.startQuestionLoop();
	}

	startQuestionLoop = () => {
		const { questionAndAnswerDuration } = this.props;
		setTimeout(() => this.setState({showAnswer: true}), questionAndAnswerDuration * (2 / 3));
		setTimeout(this.handleQuestionDone, questionAndAnswerDuration);
	};

	handleQuestionDone = () => {
		console.log('Question is done!');

		const nextQuestionIndex = (this.state.currentQuestionIndex + 1) % this.props.questions.length;
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
		const { currentQuestionIndex, showAnswer, hideQuestion } = this.state;
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
			</div>
		);
	}
}
