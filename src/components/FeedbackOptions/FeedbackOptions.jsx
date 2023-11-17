import { Btn } from 'components/FeedbackOptions/Button.styled';
import { nanoid } from 'nanoid';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <Btn key={nanoid()} type="button" onClick={() => onLeaveFeedback(option)}>
      {option[0].toUpperCase() + option.slice(1)}
    </Btn>
  ));
};
