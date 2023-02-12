import React from 'react';
import css from 'components/Feedback/Feedback.module.css';
import FeedbackOptions from 'components/Feedback/FeedbackOptions';
import Statistics from 'components/Feedback/Statistics';
import PropTypes from 'prop-types';
import Section from './Section';
import Notification from './Notification';
const Feedback = ({ onClickCounter, initialState, totalFunc, parcentFunc }) => {
  return (
    <div className={css.feedback}>
      <Section className={css.feedback_title} title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(initialState)}
          onLeaveFeedback={onClickCounter}
        />
      </Section>
      <Section className={css.feedback_title} title="Statistics">
        {totalFunc() > 0 ? (
          <Statistics
            good={initialState.good}
            neutral={initialState.neutral}
            bad={initialState.bad}
            total={totalFunc()}
            positivePercentage={parcentFunc()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
Feedback.propTypes = {
  onClickCounter: PropTypes.func,
  initialState: PropTypes.object,
  totalFunc: PropTypes.func,
  parcentFunc: PropTypes.func,
};

export default Feedback;
