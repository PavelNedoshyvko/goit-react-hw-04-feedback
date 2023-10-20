import { StatisticsItem } from "./Statistics.styled";

export const Statistics = ({good, neutral, bad, total, positiveFeedback}) => {
	return (
		<ul>
			<StatisticsItem>Good: {good}</StatisticsItem>
			<StatisticsItem>Neutral: {neutral}</StatisticsItem>
			<StatisticsItem>Bad: {bad}</StatisticsItem>
			<StatisticsItem>Total: {total()}</StatisticsItem>
			<StatisticsItem>Positive feedback: {positiveFeedback()}</StatisticsItem>
		</ul>
	);
};