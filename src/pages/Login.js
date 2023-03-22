import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (event) => {
    event.preventDefault();

    const loginDetails = {
      email,
      password,
    };
    console.log(loginDetails);
    navigate("/dashboard")
  };
  return (
    <div>
      <div className="container mx-auto">
        <div className="py-16">
          <div className="card flex-shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="card-title">
                <h2>Login</h2>
              </div>
              <form onSubmit={loginHandler}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    onChange={(event) => setEmail(event.target.value)}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    onChange={(event) => setPassword(event.target.value)}
                    className="input input-bordered"
                  />
                  <label className="label">
                    <Link
                      to="/forget-password"
                      className="label-text-alt link link-hover"
                    >
                      Forgot password?
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-5">
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </div>
              </form>
              <div className="form-control mt-6">
                <p className="text-center">
                  Don't have an account yet?{" "}
                  <Link className="link" to="/register">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
