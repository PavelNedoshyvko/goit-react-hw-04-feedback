import { Component } from "react"
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";

export class App extends Component {
	state = {
		good: 0,
		neutral: 0,
		bad: 0
	};

	leaveFeedback = (option) => {
		this.setState(prevState => (
			{[option]: prevState[option] + 1}
		))
	};

	countTotalFeedback = () =>
		this.state.good + this.state.neutral + this.state.bad;

	countPositiveFeedbackPercentage = () =>
		Math.round((this.state.good / this.countTotalFeedback()) * 100) + '%';

	render() {
		const { good, neutral, bad } = this.state;
		return (
			<>
				<Section title="Please leave feedback">
					<FeedbackOptions
						options={['good', 'neutral', 'bad']}
						onLeaveFeedback={this.leaveFeedback} />
				</Section>
				<Section title="Statistics">
					{this.countTotalFeedback() > 0 ?
						<Statistics
							good={good}
							neutral={neutral}
							bad={bad}
							total={this.countTotalFeedback}
							positiveFeedback={this.countPositiveFeedbackPercentage} /> :
						<Notification message="There is no feedback" />}
				</Section>
			</>
		);
	};
};
