import React, { Component, PropTypes } from 'react';
import { styles } from './styles';

export default class Choice extends Component {
	static propTypes = {
		text: PropTypes.string.isRequired,
		choiceCharacter: PropTypes.string.isRequired,
	};

  render() {
		const { text, choiceCharacter, style } = this.props;

    return (
      <div style={{...style, ...styles.choice}}>
				{`${choiceCharacter}. ${text}`}
      </div>
    );
  }
}
