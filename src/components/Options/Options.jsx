import css from './Options.module.css';

function Options({ updateFeedback, totalFeedback, setFeedback }) {
  return (
    <div className={css.button}>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      {totalFeedback > 0 && (
        <button
          onClick={() => {
            setFeedback({
              good: 0,
              neutral: 0,
              bad: 0,
            });
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
