import Feedback from 'components/Feedback/Feedback';
import React from 'react';
class App extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    bad: this.props.initialValue,
    neutral: this.props.initialValue,
  };

  clickCounter = e => {
    if (e.target.innerText === 'good') {
      this.setState(
        prevState => ({
          good: prevState.good + 1,
        }),
        this.countTotalFeedback
      );
    }

    if (e.target.innerText === 'bad') {
      this.setState(
        prevState => ({
          bad: prevState.bad + 1,
        }),
        this.countTotalFeedback
      );
    }
    if (e.target.innerText === 'neutral') {
      this.setState(
        prevState => ({
          neutral: prevState.neutral + 1,
        }),
        this.countTotalFeedback
      );
    }
  };
  clearState = () => {
    this.setState({
      good: this.props.initialValue,
      bad: this.props.initialValue,
      neutral: this.props.initialValue,
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };
  render() {
    return (
      <Feedback
        onClickCounter={this.clickCounter}
        initialState={this.state}
        totalFunc={this.countTotalFeedback}
        parcentFunc={this.countPositiveFeedbackPercentage}
        clearFunc={this.clearState}
      />
    );
  }
}
export default App;
