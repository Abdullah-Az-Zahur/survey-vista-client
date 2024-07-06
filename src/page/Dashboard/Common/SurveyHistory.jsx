import React, { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";

const SurveyHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: surveys = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-listings", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/survey-result/${user?.email}`);
      return res.data;
    },
  });

  
  return (
    <div>
      <Helmet>
        <title>My Listings</title>
      </Helmet>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Category</th>
              <th>Comment</th>
              <th>Opinion</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {surveys.map((survey, index) => (
              <tr key={survey._id}>
                <td>{index + 1 }</td>
                <td>{survey?.title}</td>
                <td>{survey?.category}</td>
                <td>{survey?.comment}</td>
                <td>{survey?.selectedValue}</td>
              </tr>
            ))}

            {/* {surveys.map((survey) => (
              <SurveyDataRow
                key={survey._id}
                survey={survey}
                refetch={refetch}
              ></SurveyDataRow>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SurveyHistory;
