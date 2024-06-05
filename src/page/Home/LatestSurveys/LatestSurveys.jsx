import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useSurvey from "../../../hooks/useSurvey";
import SurveyCard from "../../../components/Shared/SurveyCard/SurveyCard";

const LatestSurveys = () => {
  const [data] = useSurvey();
  const sortedData = data.sort((a, b) => new Date(b.survey_creation_time) - new Date(a.survey_creation_time));
  const surveys = sortedData.slice(0, 6);
  return (
    <div>
      <SectionTitle heading="Latest Surveys"></SectionTitle>
      {surveys && surveys.length > 0 ? (
        <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
          {surveys.map((survey) => (
            <SurveyCard key={survey._id} survey={survey}></SurveyCard>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[calc(100vh-300px)]"></div>
      )}
    </div>
  );
};

export default LatestSurveys;
