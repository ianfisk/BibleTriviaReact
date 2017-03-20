import React, { Component, PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
import { styles } from './styles';

export default class Choice extends Component {
	static propTypes = {
		text: PropTypes.string.isRequired,
		choiceCharacter: PropTypes.string.isRequired,
		showAnswer: PropTypes.bool.isRequired,
		isAnswer: PropTypes.bool.isRequired,
	};

	getStyle = () => {
		const { showAnswer, isAnswer } = this.props;

		let answerStyle = {};
		if (showAnswer) {
			answerStyle = {
				opacity: spring(isAnswer ? 1 : 0.3),
				left: spring(isAnswer ? 50 : 0),
			};
		}

		return answerStyle;
	};

  render() {
		const { text, choiceCharacter, style } = this.props;

    return (
      <div style={{...style, ...styles.choice}}>
				<Motion
					defaultStyle={{left: 0, opacity: 1}}
					style={this.getStyle()}>
					{style => <span style={{...style, position: 'relative'}}>{`${choiceCharacter}. ${text}`}</span>}
				</Motion>
      </div>
    );
  }
}
