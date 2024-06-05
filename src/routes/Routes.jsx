import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Login from "../page/Login/Login";
import SignUp from "../page/SignUp/SignUp";
import Home from "../page/Home/Home/Home";
import SurveyDetails from "../page/Shared/SurveyDetails/SurveyDetails";
import AllSurvey from "../page/AllSurvey/AllSurvey";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allSurveys",
        element: <AllSurvey></AllSurvey>,
      },
      {
        path: "/survey/:id",
        element: (
          <PrivateRoute>
            <SurveyDetails></SurveyDetails>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,
  },
]);
