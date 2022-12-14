import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/images/login/login.jpg";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import useTitle from "../../hooks/UseTitle";
const Login = () => {
  useTitle("Login");
  const { signIn, providerLogin } = useContext(AuthContext);
  //
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const googleProvider = new GoogleAuthProvider();
  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const currentUser = {
          email: user.email,
        };
        console.log(currentUser);

        //jet token
        // fetch("https://photoholic-server.vercel.app/jwt", {
        fetch("http://localhost:5000/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("moment-token", data.token);
            navigate(from, { replace: true });
          });
        form.reset();
      })
      .catch((err) => console.error(err));
  };
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((e) => {
        console.error(e);
      });
  };
  return (
    <div className="w-full">
      <div className="hero my-16 grid grid-cols-1">
        <div className="hero-content grid  md:grid-cols-2 flex-col lg:flex-row sm:place-items-center">
          <div className="text-center lg:text-left">
            <img className="" src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 lg:p-12 lg:m-12">
            <h1 className="text-5xl font-bold text-center">Login</h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="/" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
              <button
                className="btn btn-outline btn-info font-bold"
                onClick={handleGoogleSignIn}
              >
                Login with Google
              </button>
            </form>
            <p className="text-center mb-6">
              New to PhotoHolic?{" "}
              <Link className="text-blue-800 font-bold" to="/signup">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
