import React from "react";
import { Link } from "react-router-dom";

const SurveyCard = ({ survey }) => {
  const { title, description, options } = survey;
  console.log(survey);
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <p>Yes : {options.yes}</p>
            <p>no : {options.no}</p>
            <Link to={`/survey/${survey?._id}`} className="btn btn-primary">
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SurveyCard;
