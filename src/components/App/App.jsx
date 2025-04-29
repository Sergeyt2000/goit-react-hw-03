import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

export default function App() {
  const [feedbackType, setFeedbackType] = useState(() => {
    const feedbacks = localStorage.getItem("feedbacks");
    if (feedbacks !== null) {
      return JSON.parse(feedbacks);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbackType));
  }, [feedbackType]);

  const updateFeedback = (currentFeedback) => {
    setFeedbackType({
      ...feedbackType,
      [currentFeedback]: feedbackType[currentFeedback] + 1,
    });
  };
  const totalFeedback =
    feedbackType.good + feedbackType.neutral + feedbackType.bad;
  const positiveFeedbacks = Math.round(
    ((feedbackType.good + feedbackType.neutral) / totalFeedback) * 100
  );

  const resetFeedbacks = () => {
    setFeedbackType({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };
  return (
    <>
      <Description />
      <Options
        visibleReset={!!totalFeedback}
        onUpdate={updateFeedback}
        onReset={resetFeedbacks}
      />
      {totalFeedback ? (
        <Feedback
          value={feedbackType}
          totalFeedback={totalFeedback}
          positiveFeedbacks={positiveFeedbacks}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
