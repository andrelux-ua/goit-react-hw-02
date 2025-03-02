import './App.css';
import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedClicks = window.localStorage.getItem('saved-clicks');
    return savedClicks
      ? JSON.parse(savedClicks)
      : {
          good: 0,
          neutral: 0,
          bad: 0,
        };
  });
  const updateFeedback = feedbackType => {
    setFeedback(oldFeedback => ({
      ...oldFeedback,
      [feedbackType]: oldFeedback[feedbackType] + 1,
    }));
  };
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  useEffect(() => {
    window.localStorage.setItem('saved-clicks', JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
        setFeedback={setFeedback}
      />
      {totalFeedback ? (
        <Feedback feedback={feedback} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
