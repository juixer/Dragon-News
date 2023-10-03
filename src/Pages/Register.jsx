import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { Helmet } from "react-helmet";

const Register = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 my-5">
        <Helmet><title>Register</title></Helmet>
      <Navbar />
      <div className="max-w-3xl mx-auto border py-10 bg-slate-100 rounded-xl">
        <h1 className="text-4xl mb-8 font-semibold text-center">
          Register your account
        </h1>
        <hr className="mx-10"></hr>
        <div className="flex flex-col justify-center space-y-5  ">
          <div className="mx-10 mt-5">
            <h1 className="text-xl font-bold">Your Name</h1>
            <input
              type="name"
              name="name"
              placeholder="Type your Name here"
              className="input input-bordered input-md w-full"
            />
          </div>
          <div className="mx-10 mt-5">
            <h1 className="text-xl font-bold">Photo URL</h1>
            <input
              type="text"
              name="photo"
              placeholder="Type your Photo URL here"
              className="input input-bordered input-md w-full"
            />
          </div>
          <div className="mx-10 mt-5">
            <h1 className="text-xl font-bold">Email address</h1>
            <input
              type="email"
              name="email"
              placeholder="Type your Email here"
              className="input input-bordered input-md w-full"
            />
          </div>
          <div className="mx-10 mt-5">
            <h1 className="text-xl font-bold">Password</h1>
            <input
              type="password"
              name="password"
              placeholder="Type your Password here"
              className="input input-bordered input-md w-full"
            />
          </div>
          <div className="mx-10 mt-5 flex items-center gap-3">
            <input
              type="checkbox"
              name="checkbox"
              className="input w-6"
            />
            <p className="text-xl">Accept <span className="font-bold">Term & Conditions</span></p>
          </div>
          <div className="mx-10 mt-5">
            <button className="btn bg-black text-white hover:text-black w-full">
              Register
            </button>
            <p className=" font-semibold mt-5 text-center">
              Already Have An Account ?{" "}
              <Link to={"/login"}>
                <span className=" text-red-500">Log In</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
