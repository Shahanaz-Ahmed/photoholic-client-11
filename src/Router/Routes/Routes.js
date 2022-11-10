import Main from "../../Layout/Main";
import Blog from "../../Pages/Home/Blog/Blog";
import Home from "../../Pages/Home/Home/Home";
import IndividualService from "../../Pages/Home/Services/IndividualService/IndividualService";
import Services from "../../Pages/Home/Services/Services";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/Review/MyReview";
import Review from "../../Pages/Review/Review";
import SignUp from "../../Pages/SignUp/SignUp";

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
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/reviews/:id",
        element: <Review></Review>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/myreview",
        element: <MyReview></MyReview>,
      },
      // {
      //   path: "/individualservice",
      //   element: <IndividualService></IndividualService>,
      // },
    ],
  },
]);

export default router;
