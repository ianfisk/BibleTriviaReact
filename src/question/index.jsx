import React, { Component, PropTypes } from 'react';
import { Motion, spring } from 'react-motion';
import { styles } from './styles';

const shrinkTextToFit = (parent, child) => {
	if (!parent || !child)
		return;

	if (parent.offsetHeight < child.offsetHeight) {
		let limit = 0;
		while (parent.offsetHeight < child.offsetHeight && limit < 10) {
			child.style.fontSize = `${parseInt(child.style.fontSize) - 1}pt`;
			limit++;
		}
	}
};

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

	setQuestionTextRef = (ref) => {
		this.questionText = ref;
		shrinkTextToFit(this.questionContainer, this.questionText);
	};

	render() {
		const { fadeQuestionIn } = this.state;
		const { text } = this.props;

		return (
			<div style={styles.container} ref={x => this.questionContainer = x}>
				{fadeQuestionIn ?
					<Motion
						defaultStyle={this.getDefaultStyle()}
						style={this.getStyle()}>
						{style => (
							<div
								ref={this.setQuestionTextRef.bind(this)}
								style={{
									...style,
									alignSelf: 'flex-start',
									position: 'relative',
									fontSize: '48pt',
									paddingRight: '5%',
								}}>
								{text}
							</div>
						)}
					</Motion> :
					null
				}
			</div>
		);
	}
}
