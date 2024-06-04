import React from "react";

const SurveyCard = ({ aServey }) => {
  const { Title, Description } = aServey;
  console.log(aServey)
  return (
    <div>
      <h2>SurveyCard</h2>
      <p>{aServey.Title}</p>
    </div>
  );
};

export default SurveyCard;
