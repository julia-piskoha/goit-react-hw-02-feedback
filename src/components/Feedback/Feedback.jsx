import React from 'react';
import css from 'components/Feedback/Feedback.module.css';
import FeedbackOptions from 'components/Feedback/FeedbackOptions';
import Statistics from 'components/Feedback/Statistics';
import PropTypes from 'prop-types';
const Feedback = ({
  onClickCounter,
  initialState,
  totalFunc,
  parcentFunc,
  //   clearFunc,
}) => {
  return (
    <div className={css.feedback}>
      <p className={css.feedback_title}>Please leave feedback</p>
      <FeedbackOptions
        options={Object.keys(initialState)}
        onLeaveFeedback={onClickCounter}
      />
      <Statistics
        good={initialState.good}
        neutral={initialState.neutral}
        bad={initialState.bad}
        total={totalFunc()}
        positivePercentage={parcentFunc()}
      />
    </div>
  );
};
Feedback.propTypes = {
  onClickCounter: PropTypes.func,
  initialState: PropTypes.object,
  totalFunc: PropTypes.func,
  parcentFunc: PropTypes.func,
  //   clearFunc: PropTypes.func,
};

export default Feedback;
