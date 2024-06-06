import React from "react";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import SurveyDataRow from "../../../components/TableRows/SurveyDataRow";

const MyListings = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const {
    data: surveys = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["my-listings", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-listings/${user?.email}`);
      return res.data;
    },
  });

  console.log(surveys);

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <Helmet>
        <title>My Listings</title>
      </Helmet>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Details</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {surveys.map((survey) => (
              <tr key={survey._id}>
               
                <td>{survey?.title}</td>
                <td>{survey?.category}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs">Delete</button>
                </th>
                <th>
                  <button className="btn btn-ghost btn-xs">Update</button>
                </th>
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
    </>
  );
};

export default MyListings;
