import React, { Component, PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
import { styles } from './styles';

export default class Question extends Component {
	static propTypes = {
		text: PropTypes.string.isRequired,
	};

	state = {
		fadeQuestionIn: false,
	};

	componentDidMount() {
		setTimeout(() => this.setState({fadeQuestionIn: true}), 600);
	}

	getDefaultStyle = () => {
		return {
			opacity: 0,
			left: -30,
			top: 5,
		};
	}

	getStyle = prevInterpolatedStyles => {
		return {
			opacity: spring(1),
			left: spring(0),
			top: spring(0),
		};
	};

	render() {
		const { fadeQuestionIn } = this.state;
		const { text } = this.props;

		return (
			<div style={styles.container}>
				{fadeQuestionIn ?
					<Motion
						defaultStyle={this.getDefaultStyle()}
						style={this.getStyle()}>
						{style => <span style={{...style, alignSelf: 'flex-start', position: 'relative'}}>{text}</span>}
					</Motion> :
					null
				}
			</div>
		);
	}
}
