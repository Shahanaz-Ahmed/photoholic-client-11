import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img from "../../assets/images/login/login.jpg";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import useTitle from "../../hooks/UseTitle";
const Login = () => {
  useTitle("Login");
  const { signIn, providerLogin } = useContext(AuthContext);
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
    <div>
      <div className="hero w-full my-20">
        <div className="hero-content  grid gap-20 md:grid-cols-2 flex-col lg:flex-row sm:place-items-center">
          <div className="text-center lg:text-left">
            <img className="" src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100 p-12 m-12">
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
            <p className="text-center">
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
