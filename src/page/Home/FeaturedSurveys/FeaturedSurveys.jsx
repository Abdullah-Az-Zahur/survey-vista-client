
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useSurvey from "../../../hooks/useSurvey";
import SurveyCard from "../../../components/Shared/SurveyCard/SurveyCard";

const FeaturedSurveys = () => {

  const [survey] = useSurvey();
  

  return (
    <div>
      <SectionTitle heading="Featured Surveys"></SectionTitle>
      
      <div className="grid md:grid-cols-2 gap-10">
        {
          survey.map(aServey => <SurveyCard
          key={aServey._id}
          aServey={aServey}
          ></SurveyCard>)
        }
      </div>

    </div>
  );
};

export default FeaturedSurveys;
