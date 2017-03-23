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
				bottom: spring(-80, presets.gentle),
			};
		}

		return {
			bottom: spring(-30, presets.gentle),
		};
	};

	render() {
		const { seconds } = this.props;

		return (
			<div style={styles.container}>
				<Motion
					defaultStyle={{bottom: -80}}
					style={this.getStyle()}>
					{({bottom}) => (
						<div style={{bottom, ...styles.timer}}>
							<span style={styles.number}>{seconds}</span>
						</div>
					)}
				</Motion>
			</div>
		);
	}
}
