import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';
import { Wrapp } from './App.styled';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { useState } from 'react';

export const App = () => {
  const [goodScores, setGoodScores] = useState(0);

  return (
    <Wrapp>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.updateState}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics state={this.state} total={total} rate={rate} />
        )}
      </Section>
    </Wrapp>
  );
};
