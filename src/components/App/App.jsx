import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';
import { Wrapp } from './App.styled';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { useEffect, useState } from 'react';

export const App = () => {
  const [feedbackOptions, setFeedbackOptions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });
  const [total, setTotal] = useState(0);
  const [rate, setRate] = useState('');

  const updateState = option => {
    setFeedbackOptions(prevState => {
      return { ...prevState, [option]: prevState[option] + 1 };
    });
  };

  // рахує тотал
  const countTotalFeedback = arr => {
    let sum = 0;
    for (const value of Object.values(arr)) {
      sum += value;
    }
    return sum;
  };

  useEffect(() => {
    setTotal(countTotalFeedback(feedbackOptions));
  }, [feedbackOptions]);

  useEffect(() => {
    setRate(Math.round((feedbackOptions.good / total) * 100));
  }, [total, feedbackOptions.good]);

  return (
    <Wrapp>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={[Object.keys(feedbackOptions)]}
          onLeaveFeedback={updateState}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics state={feedbackOptions} total={total} rate={rate} />
        )}
      </Section>
    </Wrapp>
  );
};
