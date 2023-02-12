import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <div>Good: {good}</div>
      <div>Neutral: {neutral}</div>
      <div>Bad: {bad}</div>

      {total > 0 ? (
        <>
          <div>Total: {total}</div>
          <div>
            Positive Feedback:{' '}
            {positivePercentage !== Infinity ? positivePercentage : 0}%
          </div>
        </>
      ) : (
        ''
      )}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  neutral: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  bad: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  total: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  positivePercentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Statistics;
