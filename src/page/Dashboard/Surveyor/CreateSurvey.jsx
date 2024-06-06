import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CreateSurvey = () => {
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { mutateAsync } = useMutation({
    mutationFn: async (surveyData) => {
      const { data } = await axiosSecure.post(`/create`, surveyData);
      return data;
    },
    onSuccess: () => {
      console.log("Data Saved Successfully");
      toast.success("Survey Added Successfully!");
      navigate("/dashboard/my-listings");
      setLoading(false);
    },
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const deadline = startDate;
    const category = form.category.value;
    const currentTime = new Date();
    const status = ' publish'
    let options = {
      yes: 0,
      no: 0,
    };
    const surveyor = {
      email: user?.email,
    };

    try {
      const surveyData = {
        title,
        description,
        deadline,
        category,
        currentTime,
        status,
        options,
        surveyor,
      };
      console.log(surveyData);
      // post request to server
      await mutateAsync(surveyData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-md ">
        <h2 className="text-lg font-semibold text-gray-700 capitalize ">
          Create Survey
        </h2>

        <form onSubmit={handleFormSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="job_title">
                Survey Title
              </label>
              <input
                id="title"
                name="title"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="job_title">
                Survey Description
              </label>
              <input
                id="description"
                name="description"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Deadline</label>

              {/* Date Picker Input Field */}
              <DatePicker
                className="border p-2 rounded-md"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>

            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700 " htmlFor="category">
                Category
              </label>
              <select
                name="category"
                id="category"
                className="border p-2 rounded-md"
              >
                <option value="Customer Satisfaction">
                  Customer Satisfaction
                </option>
                <option value="Employee Engagement">Employee Engagement</option>
                <option value="Market Research">Market Research</option>
                <option value="Product Feedback">Product Feedback</option>
                <option value="Event Feedback">Event Feedback</option>
                <option value="Health and Wellness">Health and Wellness</option>
                <option value="Educational Feedback">
                  Educational Feedback
                </option>
                <option value="Brand Awareness">Brand Awareness</option>
                <option value="Community and Social Research">
                  Community and Social Research
                </option>
                <option value="User Experience (UX)">
                  User Experience (UX)
                </option>
              </select>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default CreateSurvey;
