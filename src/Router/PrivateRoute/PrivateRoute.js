import React, { useContext } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <h1 className="text-5xl">Loading...</h1>;
  }
  if (user) {
    return children;
  }
  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold text-center">
        Please login to add a review.
      </h2>
      <div className="flex justify-center my-4">
        <Link to="/login">
          <button className="btn btn-primary">Login First</button>
        </Link>
      </div>
    </div>

    // return <Navigate state={{ from: location }} replace></Navigate>;
  );
};

export default PrivateRoute;
