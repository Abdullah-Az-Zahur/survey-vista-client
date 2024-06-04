import React from "react";
import { Link } from "react-router-dom";

const SurveyCard = ({ survey }) => {
  const { Title, Description } = survey;
  console.log(survey);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{Title}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <Link to={`/survey/${survey?._id}`} className="btn btn-primary">Start</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyCard;
