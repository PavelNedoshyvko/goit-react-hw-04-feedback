import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import { Notification } from "./Notification/Notification";
import { useState } from "react";



export const App = () => {

	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const leaveFeedback = (option) => {
		switch (option) {
			case 'good':
				setGood(prevState => prevState + 1)
				break;
			case 'neutral':
				setNeutral(prevState => prevState + 1)
				break;
			case 'bad':
				setBad(prevState => prevState + 1)
				break;
			default:
				break;
		}
	};

	const countPositiveFeedbackPercentage = () =>
		Math.round((good / countTotalFeedback) * 100) + '%';

	const countTotalFeedback = good + neutral + bad;

	return (
		<>
			<Section title="Please leave feedback">
				<FeedbackOptions
					options={['good', 'neutral', 'bad']}
					onLeaveFeedback={leaveFeedback} />
			</Section>
			<Section title="Statistics">
				{countTotalFeedback > 0 ?
					<Statistics
						good={good}
						neutral={neutral}
						bad={bad}
						total={countTotalFeedback}
						positiveFeedback={countPositiveFeedbackPercentage} /> :
					<Notification message="There is no feedback" />}
			</Section>
		</>
	);
};



// export class App extends Component {
// 	state = {
// 		good: 0,
// 		neutral: 0,
// 		bad: 0
// 	};

// 	leaveFeedback = (option) => {
// 		this.setState(prevState => (
// 			{ [option]: prevState[option] + 1 }
// 		))
// 	};

// 	countTotalFeedback = () =>
// 		this.state.good + this.state.neutral + this.state.bad;

// 	countPositiveFeedbackPercentage = () =>
// 		Math.round((this.state.good / this.countTotalFeedback()) * 100) + '%';

// 	render() {
// 		const { good, neutral, bad } = this.state;
// 		return (
// 			<>
// 				<Section title="Please leave feedback">
// 					<FeedbackOptions
// 						options={['good', 'neutral', 'bad']}
// 						onLeaveFeedback={this.leaveFeedback} />
// 				</Section>
// 				<Section title="Statistics">
// 					{this.countTotalFeedback() > 0 ?
// 						<Statistics
// 							good={good}
// 							neutral={neutral}
// 							bad={bad}
// 							total={this.countTotalFeedback}
// 							positiveFeedback={this.countPositiveFeedbackPercentage} /> :
// 						<Notification message="There is no feedback" />}
// 				</Section>
// 			</>
// 		);
// 	};
// };
