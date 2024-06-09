import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import Login from "../page/Login/Login";
import SignUp from "../page/SignUp/SignUp";
import Home from "../page/Home/Home/Home";
import SurveyDetails from "../page/Shared/SurveyDetails/SurveyDetails";
import AllSurvey from "../page/AllSurvey/AllSurvey";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layouts/Dashboard";
import Common from "../page/Dashboard/Common/Common";
import CreateSurvey from "../page/Dashboard/Surveyor/CreateSurvey";
import MyListings from "../page/Dashboard/Surveyor/MyListings";
import UpdateSurvey from "../page/Dashboard/Surveyor/UpdateSurvey";
import Profile from "../page/Dashboard/Common/Profile";
import ManageUsers from "../page/Dashboard/Admin/ManageUsers";
import AdminRoute from "./AdminRoute";
import SurveyorRoute from "./SurveyorRoute";
import SurveyHistory from "../page/Dashboard/Common/SurveyHistory";

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

  // Dashboard Routes
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <Common></Common>
          </PrivateRoute>
        ),
      },

      // Admin Routes
      {
        path: "manage-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ManageUsers></ManageUsers>
            </AdminRoute>
          </PrivateRoute>
        ),
      },

      // Surveyor Routes
      {
        path: "create-survey",
        element: (
          <PrivateRoute>
            <SurveyorRoute>
              <CreateSurvey></CreateSurvey>
            </SurveyorRoute>
          </PrivateRoute>
        ),
      },

      {
        path: "my-listings",
        element: (
          <PrivateRoute>
            <SurveyorRoute>
              <MyListings></MyListings>
            </SurveyorRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "update-survey/:id",
        element: (
          <PrivateRoute>
            <SurveyorRoute>
              <UpdateSurvey></UpdateSurvey>
            </SurveyorRoute>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/survey/${params.id}`),
      },

      // user route
      {},

      // common routes
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "survey-history",
        element: (
          <PrivateRoute>
            <SurveyHistory></SurveyHistory>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
