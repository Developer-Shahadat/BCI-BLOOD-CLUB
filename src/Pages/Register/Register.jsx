import React from "react";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const passowrd = form.password.value;
    console.log(email, name, passowrd);
  };
  return (
    <div className="hero min-h-screen bg-red-500">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 lg:mr-40 ">
          
          <img src="https://i.ibb.co/C9BZLrL/world-blood-day-concept-vector-flat-illustrations-199064-821-removebg-preview.png" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-red-400">
        <h1 className="text-3xl font-bold text-center ">Register now!</h1>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="Name"
                placeholder="Enter Your Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                name="email"
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
                placeholder="Enter Your Password"
                name="password"
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
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
