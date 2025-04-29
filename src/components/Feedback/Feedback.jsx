import css from "./Feedback.module.css";

export default function Feedback({ value, totalFeedback, positiveFeedbacks }) {
  return (
    <ul className={css.feedback}>
      <li className={css.feedbackItem}>Good: {value.good}</li>
      <li className={css.feedbackItem}>Neutral: {value.neutral}</li>
      <li className={css.feedbackItem}>Bad: {value.bad}</li>
      <li className={`${css.feedbackItem} ${css.total}`}>
        Total: {totalFeedback}
      </li>
      <li className={`${css.feedbackItem} ${css.total}`}>
        Positive: {positiveFeedbacks}%
      </li>
    </ul>
  );
}
