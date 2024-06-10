import React from "react";
import useSurvey from "../../../hooks/useSurvey";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import { Helmet } from "react-helmet";

const SurveysStatus = () => {

  const [data, loading] = useSurvey();
  if (loading) return <LoadingSpinner />;


  return (
    <div>
      <Helmet>
        <title>Survey Status</title>
      </Helmet>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Status</th>
              
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data.map((aData, index) => (
              <tr key={aData._id}>
                <td>{index + 1}</td>
                <td>{aData?.title}</td>
                <td>{aData?.status}</td>
                
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SurveysStatus;
