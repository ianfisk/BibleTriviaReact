import React, { Component, PropTypes } from 'react';
import { Motion, spring, presets } from 'react-motion';
import { styles } from './styles';

export default class CountdownTimer extends Component {
	static propTypes = {
		hide: PropTypes.bool.isRequired,
		seconds: PropTypes.number.isRequired,
	};

	state = {
	};

	getStyle = () => {
		const { hide } = this.props;
		if (hide) {
			return {
				opacity: spring(0),
				height: spring(30, presets.gentle),
			};
		}

		return {
			opacity: spring(1),
			height: spring(70, presets.gentle),
		};
	};

	render() {
		const { seconds } = this.props;

		return (
			<div style={styles.container}>
				<Motion
					defaultStyle={{height: 30, opacity: 0}}
					style={this.getStyle()}>
					{({height, opacity}) => (
						<div style={{height: height, ...styles.timer}}>
							<span style={{opacity: opacity, ...styles.number}}>{seconds}</span>
						</div>
					)}
				</Motion>
			</div>
		);
	}
}
