import React from "react";

const LogIn = () => {
  return (
    <div className="hero min-h-screen bg-red-500">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 lg:mr-40 ">
          
          <img src="https://i.ibb.co/58B9rf8/man-chair-donating-his-blood-into-blood-bag-11197-411-removebg-preview-1.png" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-red-400">
        <h1 className="text-3xl text-center font-bold">LogIn now!</h1>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
