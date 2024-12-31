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
      <div>
        <h1 className="text-xl font-bold">Payment Page</h1>
        {type === "pro" && <p>You selected: Buy Premium</p>}
        {type === "surveyor" && <p>You selected: Become Surveyor</p>}

        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
