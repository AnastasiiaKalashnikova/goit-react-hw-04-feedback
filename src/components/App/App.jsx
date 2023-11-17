import { Component } from 'react';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';
import { Wrapp } from './App.styled';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateState = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback = state => {
    let sum = 0;
    for (const value of Object.values(state)) {
      sum += value;
    }
    return sum;
  };

  countPositiveFeedbackPercentage = () => {
    return (this.state.good / this.countTotalFeedback(this.state)) * 100;
  };

  render() {
    const total = this.countTotalFeedback(this.state);
    const rate = Math.round(this.countPositiveFeedbackPercentage(this.state));

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
  }
}
