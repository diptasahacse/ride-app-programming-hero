import React from 'react'

const ForgetPassword = () => {
  return (
    <div className="container mx-auto">
        <div className="py-16">
          <div className="card flex-shrink-0 w-full max-w-sm mx-auto shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="card-title">
                <h2>Forget Password</h2>
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
              
              <div className="form-control mt-6">
                <button className="btn btn-error color-white">Send Reset Link</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default ForgetPassword