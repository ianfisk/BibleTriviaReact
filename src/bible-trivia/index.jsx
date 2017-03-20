import React, { Component, PropTypes } from 'react';
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

  render() {
    return (
      <div style={styles.container}>
				<div style={styles.leftMargin}></div>
      </div>
    );
  }
}
