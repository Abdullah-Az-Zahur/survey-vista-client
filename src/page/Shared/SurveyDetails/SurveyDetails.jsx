import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useAuth from "../../../hooks/useAuth";

const SurveyDetails = () => {
  const { id } = useParams();
  const axiosCommon = useAxiosPublic();
  const { user } = useAuth();
  const [selectedValue, setSelectedValue] = useState("");

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
  console.log(id);
  console.log(user.email);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(selectedValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold">{survey?.title}</h1>
            <p className="py-6">{survey?.description}</p>

            {/* radio button */}
            <div>
              <div className="p-4">
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Yes</span>
                    <input
                      type="radio"
                      name="agreement"
                      value="Yes"
                      className="radio checked:bg-blue-500"
                      checked={selectedValue === "Yes"}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">No</span>
                    <input
                      type="radio"
                      name="agreement"
                      value="No"
                      className="radio checked:bg-red-500"
                      checked={selectedValue === "No"}
                      onChange={handleChange}
                    />
                  </label>
                </div>
                <h2 className="mt-4 text-xl">
                  Selected Value: {selectedValue}
                </h2>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SurveyDetails;
