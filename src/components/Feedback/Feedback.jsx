import css from './Feedback.module.css';

function Feedback({ feedback, totalFeedback }) {
  return (
    <ul>
      <li>
        <p>Good: {feedback.good}</p>
      </li>
      <li>
        <p>Neutral: {feedback.neutral}</p>
      </li>
      <li>
        <p>Bad: {feedback.bad}</p>
      </li>
      <li>
        <p>Total: {totalFeedback}</p>
      </li>
      <li>
        <p>Positive: {Math.round((feedback.good / totalFeedback) * 100)}%</p>
      </li>
    </ul>
  );
}

export default Feedback;
