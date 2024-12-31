import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLocation } from "react-router-dom";

const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
  const location = useLocation();
  const { type } = location.state || {};
  return (
    <div>
      <SectionTitle
        heading="Payment"
        subHeading="Please pay to become Pro user"
      ></SectionTitle>
      <div className="">
        <div>
          <h2>Test Card Example</h2>
          <div className="flex gap-5">
            <h2>card Number :</h2>
            <p>5555555555554444</p>
          </div>

          <div className="flex gap-5">
            <h2>Date : </h2>
            <p>12 / 35 612 14512</p>
          </div>
        </div>
        <div className=" text-center py-5">
          {type === "pro" && <p className="">Buy Premium</p>}
          {type === "surveyor" && <p>Become Surveyor</p>}
        </div>

        <Elements stripe={stripePromise}>
          <CheckoutForm type={type}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
