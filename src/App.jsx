import { Component } from "react";
import Statistics from "./Components/Statistics/Statistics";
import FeedbackOptions from "./Components/FeedbackOptions/FeedbackOptions";
import Section from "./Components/Section/Section";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (type) => {
    this.setState((prevState) => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const feedbackOptions = Object.keys(this.state); // масив строк наших ключей
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} />
        </Section>
      </>
    );
  }
}

export default App;
