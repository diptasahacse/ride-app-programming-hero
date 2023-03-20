import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="py-16">
          <div className="card flex-shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="card-title">
                <h2>Register</h2>
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
               
              </div>
              <div className="form-control mt-5">
                <button className="btn btn-primary">Register</button>
              </div>
              <div className="form-control mt-6">
                <p className="text-center">
                  Already have an account?{" "}
                  <Link className="link" to="/sign-in">
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

export default Register;
