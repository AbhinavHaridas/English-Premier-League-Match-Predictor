import React from "react";

import "./ScoreCard.css";

interface ChildProps {
    avgGoals: number;
    text: string;
}

const ScoreCard: React.FC<ChildProps> = ({avgGoals, text}) => {
  // Component which contains the average goal scored and a text
  return (
      <div className="scorecard-wrap">
        <p className="goals">{avgGoals} %</p>
        <p className="title">{text}</p>
      </div>
  );
};

export default ScoreCard;
