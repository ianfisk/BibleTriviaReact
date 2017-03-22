import React, { Component, PropTypes } from 'react';
import { StaggeredMotion, spring } from 'react-motion';
import Choice from '../choice';
import './styles.css';

const characterCodeStart = 'A'.charCodeAt(0);

export default class Choices extends Component {
	static propTypes = {
		choices: PropTypes.arrayOf(PropTypes.string).isRequired,
		showAnswer: PropTypes.bool.isRequired,
		answer: PropTypes.number.isRequired,
	};

	state = {
		fadeChoicesIn: false,
		choices: this.props.choices.map((choice, index) => ({
			key: String.fromCharCode(characterCodeStart + index),
			data: choice,
		})),
	};

	componentWillReceiveProps(newProps) {
		this.setState({
			choices: newProps.choices.map((choice, index) => ({
				key: String.fromCharCode(characterCodeStart + index),
				data: choice,
			}))
		});
	}

	componentDidMount() {
		setTimeout(() => this.setState({fadeChoicesIn: true}), 1100);
	}

	getDefaultStyles = () => {
		return this.state.choices.map(_ => {
			return {
				opacity: 0,
				left: -100,
			};
		});
	};

	getStyles = prevInterpolatedStyles => {
		return prevInterpolatedStyles.map((_, i) => {
			return i === 0
				? {
					left: spring(0, {stiffness: 140, damping: 15}),
					opacity: spring(1, {stiffness: 140, damping: 15}),
				} : {
					left: spring(prevInterpolatedStyles[i - 1].left, {stiffness: 140, damping: 15}),
					opacity: spring(prevInterpolatedStyles[i - 1].opacity, {stiffness: 140, damping: 15}),
				};
		});
	};

	render() {
		const { answer, showAnswer } = this.props;
		const { fadeChoicesIn, choices } = this.state;

		return (
			<div className="choice-container">
				{fadeChoicesIn ?
					<StaggeredMotion
						defaultStyles={this.getDefaultStyles()}
						styles={this.getStyles}>
						{interpolatedStyles =>
							<div style={{dipslay: 'flex', flexDirection: 'column', width: '100%', height: '100%'}}>
								{interpolatedStyles.map((style, i) => {
									return (
										<Choice
											key={choices[i].key}
											style={style}
											choiceCharacter={choices[i].key}
											text={choices[i].data}
											isAnswer={answer === i}
											showAnswer={showAnswer}
										/>
									);
								})}
							</div>
						}
					</StaggeredMotion> :
					null
				}
			</div>
		);
	}
}
