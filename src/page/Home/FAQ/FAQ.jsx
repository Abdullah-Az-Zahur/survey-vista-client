import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const FAQ = () => {
  return (
    <div>
      <SectionTitle heading="FAQ"></SectionTitle>
      <div>
        <section className="dark:bg-gray-100 dark:text-gray-800">
          <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
            <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
              How it works
            </p>
            <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 dark:divide-gray-300">
              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                How do I create a survey?
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    1.Sign Up / Log In: First, sign up for an account or log in if you already have one.
                  </p>
                  <p>
                    2.Create a New Survey: Click on the "Create Survey" button on your dashboard.
                  </p>
                  <p>
                    3.Add Questions: Customize your survey by adding questions,
                  </p>
                  <p>
                    4.Save and Publish: Once you’re happy with your survey, save it and click "Publish" to make it live.
                  </p>
                </div>
              </details>
              <details>
                <summary className="py-2 outline-none cursor-pointer focus:underline">
                How do I analyze the results of my survey?
                </summary>
                <div className="px-4 pb-4">
                  <p>
                    1.View Responses: Go to your dashboard and click on the survey you want to analyze. Select the "Responses" tab to see individual responses.
                  </p>
                </div>
              </details>
              
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQ;
