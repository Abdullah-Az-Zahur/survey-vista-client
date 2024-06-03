import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from "../../../assets/image/banner/banner.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="flex flex-col items-center justify-center h-80 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <Link
        to="/"
        className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded"
      >
        Explore
      </Link>
    </div>
  );
};

export default Banner;
