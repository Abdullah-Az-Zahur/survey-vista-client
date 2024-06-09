import React from "react";
import { Link } from "react-router-dom";

const SurveyCard = ({ survey }) => {
  const { title, category, yes, no } = survey;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{category}</p>
          <div className="card-actions justify-end">
            <p>Yes : {yes}</p>
            <p>no : {no}</p>
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
