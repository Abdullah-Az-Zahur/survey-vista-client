import React from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../components/Shared/LoadingSpinner";

const StartSurvey = () => {
  const { id } = useParams();
  const axiosCommon = useAxiosPublic();

  const {
    data: survey = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["survey", id],
    queryFn: async () => {
      const { data } = await axiosCommon.get(`/survey/${id}`);
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner />;
  console.log(survey);

  return (
    <div>
      <h2>{survey?.Title}</h2>
    </div>
  );
};

export default StartSurvey;
