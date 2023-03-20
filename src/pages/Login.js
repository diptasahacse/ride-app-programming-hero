import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="py-16">
          <div className="card flex-shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="card-title">
                <h2>Login</h2>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
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
                <button className="btn btn-primary">Login</button>
              </div>
              <div className="form-control mt-6">
                <p className="text-center">Don't have an account yet? <Link className="link" to='/register'>Sign up</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
