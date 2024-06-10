import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useMutation, useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import useAuth from "../../../hooks/useAuth";
import { data } from "autoprefixer";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const SurveyDetails = () => {
  const { id } = useParams();
  const axiosCommon = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [selectedValue, setSelectedValue] = useState("");
  const { email } = user;
  const [loading, setLoading] = useState(false);

  const [matchData, setMatchData] = useState([]);
  const [result, setResult] = useState([]);

  const { mutateAsync } = useMutation({
    mutationFn: async (surveyData) => {
      const { data } = await axiosSecure.put(`/survey-result`, surveyData);
      return data;
    },
    onSuccess: () => {
      console.log("Data Saved Successfully");
      // toast.success("Survey Added Successfully!");
      // Navigate("/dashboard/my-listings");
      refetch();
      setLoading(false);
    },
  });
  const { mutateAsync: mutateAsync2 } = useMutation({
    mutationFn: async (surveyData) => {
      const { data } = await axiosSecure.patch(`/surveyVote/${id}`, surveyData);
      return data;
    },
    onSuccess: () => {
      console.log("Data Saved Successfully");
      toast.success("Thank You!");
      Navigate("/");
      refetch();
      setLoading(false);
    },
  });

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
  console.log(survey)

  const { data: DBuser = {} } = useQuery({
    queryKey: ["user", email],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/user/${email}`);
      return data;
    },
  });

  const { data: surveyResult = [] } = useQuery({
    queryKey: ["survey-result", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/survey-result/${user?.email}`);
      return res.data;
    },
  });

  useEffect(() => {
    // Simulate data fetch
    setMatchData(surveyResult);
    checkForMatch(surveyResult);
  }, [surveyResult]);

  const checkForMatch = (matchData) => {
    const matchingData = matchData.find((item) => item.surveyId == id);
    if (matchingData) {
      setResult([matchingData]);
    } else {
      setResult([]);
    }
  };



  if (isLoading) return <LoadingSpinner />;

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const comment = form.comment?.value;
    try {
      const surveyData = {
        surveyId: id,
        title:survey?.title,
        category:survey?.category,
        userEmail: user.email,
        comment,
        selectedValue,
      };
      console.log(surveyData);
      console.log(selectedValue);
      // post request to server
      await mutateAsync(surveyData);
      await mutateAsync2(surveyData);
      refetch();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-2xl font-bold">{survey?.title}</h1>
            <p className="py-6">Dead Line : {survey?.deadline}</p>
            <p className="py-6">Category : {survey?.category}</p>
            <p className="py-6">Description : {survey?.description}</p>

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

            {/* comment */}
            {DBuser?.pro === "yes" && (
              <input
                name="comment"
                type="text"
                placeholder="Type your comment here"
                className="input input-bordered input-lg w-full max-w-xs mb-5"
              />
            )}


            {/* conditional submit button depend on user voted or not */}
            {result[0]?.userEmail != email &&
            result[0]?.surveyId.surveyId != id ? (
              <button type="submit"  className="btn btn-primary">
                Submit
              </button>
            ) : (
              <button disabled type="submit" className="btn btn-primary">
                Already voted
              </button>
            )}

           
          </div>
        </div>
      </form>
    </div>
  );
};

export default SurveyDetails;
