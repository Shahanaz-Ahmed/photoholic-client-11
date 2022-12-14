import Main from "../../Layout/Main";
import Blog from "../../Pages/Home/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import AddService from "../../Pages/Home/Services/AddService/AddService";
import IndividualService from "../../Pages/Home/Services/IndividualService/IndividualService";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/Review/MyReview";
import Review from "../../Pages/Review/Review";
import UpdateReview from "../../Pages/Review/UpdateReview";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/individualservice/:id",
        element: <IndividualService></IndividualService>,
        loader: ({ params }) =>
          fetch(`https://photoholic-server.vercel.app/services/${params.id}`),
      },
      {
        path: "/reviews/:id",
        element: (
          <PrivateRoute>
            <Review></Review>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://photoholic-server.vercel.app/services/${params.id}`),
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
        // loader: ({ params }) =>
        //   fetch(`https://photoholic-server.vercel.app/reviews?email=${params.email}`),
      },
      {
        path: "/update/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://photoholic-server.vercel.app/myreviews/${params.id}`
          );
        },
        element: <UpdateReview></UpdateReview>,
      },
      {
        path: "/addservice",
        element: (
          <PrivateRoute>
            <AddService></AddService>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
