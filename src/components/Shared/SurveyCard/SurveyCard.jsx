import React from "react";
import { Link } from "react-router-dom";

const SurveyCard = ({ survey }) => {
  const { title, description, vote } = survey;
  console.log(survey);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <p>Vote : {vote}</p>
            <Link to={`/survey/${survey?._id}`} className="btn btn-primary">
              Start
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyCard;
