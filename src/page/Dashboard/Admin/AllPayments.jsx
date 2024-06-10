import React from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Shared/LoadingSpinner";
import { Helmet } from "react-helmet";

const AllPayments = () => {
  const axiosSecure = useAxiosSecure();
  //   Fetch users Data
  const {
    data: payments = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/payments`);
      return data;
    },
  });

  console.log(payments);
  if (isLoading) return <LoadingSpinner />;

  return (
    <div>
      <Helmet>
        <title>All Payments</title>
      </Helmet>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Transaction ID</th>
              <th>Price</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <td>{index + 1}</td>
                <td>{payment?.email}</td>
                <td>{payment?.transactionId}</td>
                <td>{payment?.price}</td>
                <td>{payment?.date}</td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPayments;
