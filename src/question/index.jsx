import React, { Component, PropTypes } from 'react';
import { styles } from './styles';

export default class Question extends Component {
	static propTypes = {
		text: PropTypes.string.isRequired,
	};

  render() {
		const { text } = this.props;

    return (
      <div style={styles.container}>
				<span style={{alignSelf: 'flex-start'}}>{text}</span>
      </div>
    );
  }
}
