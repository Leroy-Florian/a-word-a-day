import React, { useState } from "react";
import { QuizItem } from "./RandomSelection/RandomSelection";

export interface Props {
  quizItem: QuizItem;
}

export const QuizCard: React.FunctionComponent<Props> = ({ quizItem }) => {
  const [visible, setVisibility] = useState(false);

  function reveal(): void {
    setVisibility(true);
  }

  return (
    <div className="container">
      <p data-e2e="challenge-content">{quizItem.visible}</p>
      {!visible && <button data-e2e='challenge-display-button' onClick={reveal}>display</button>}
      {visible && <p data-e2e="challenge-translation">{quizItem.hidden}</p>}
    </div>
  );
};
