import { Button } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
	return (
		<div>
			{options.map((option) => (
				<Button key={option} type="button" name={option} onClick={() => onLeaveFeedback(option)} >{option}</Button>
			))}
		</div>
	);
};