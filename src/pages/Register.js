import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [role, setRole] = useState("");
  const roleHandler = (event) => {
    setRole(event.target.value);
  };

  return (
    <div>
      <div className="container mx-auto">
        <div className="py-16">
          <div className="card flex-shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="card-title">
                <h2>Register <span className="text-primary">{role === 'rider' && "For Rider"}</span> <span className="text-info">{role === 'learner' && "For Learner"}</span></h2>
              </div>
              <div className="form-control mt-4">
                <select
                  onChange={roleHandler}
                  className="select select-bordered select-sm w-full max-w-xs"
                >
                  <option disabled selected>
                    Select Role
                  </option>
                  <option value="rider">Rider</option>
                  <option value="learner">Learner</option>
                </select>
              </div>

              {role === "rider" && (
                <div>
                  <div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Rider email"
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
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Confirm Password</span>
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
                  </div>
                </div>
              )}
              {role === "learner" && (
                <div>
                  <div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Learner email"
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
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Confirm Password</span>
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
                  </div>
                </div>
              )}
              <div className="form-control mt-6">
                <p className="text-center">
                  Already have an account?{" "}
                  <Link className="link" to="/login">
                    Sign in
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
