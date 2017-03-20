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
		})),
		showQuestion: PropTypes.bool.isRequired,
	};

	static defaultProps = {
		questions: [],
	};

	state = {
		currentQuestionIndex: 0,
	};

	// componentDidMount() {
	// 	setTimeout(() => this.setState({currentQuestionIndex: 1}), 10000);
	// }

  render() {
		const { questions, showAnswer } = this.props;
		const { currentQuestionIndex } = this.state;
		const currentQuestion = questions[currentQuestionIndex];

    return (
      <div style={styles.container}>
				<div style={styles.leftMargin}></div>
				<div style={styles.content}>
					<Question text={currentQuestion.text} />
					<Choices choices={currentQuestion.choices} showAnswer={showAnswer} />
				</div>
      </div>
    );
  }
}
