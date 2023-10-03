import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { Helmet } from "react-helmet";

const LogIn = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 my-5">
        <Helmet><title>Log In</title></Helmet>
      <Navbar />
      <div className="max-w-3xl mx-auto border py-10 bg-slate-100 rounded-xl">
        <h1 className="text-4xl mb-8 font-semibold text-center">
          Login your account
        </h1>
        <hr className="mx-10"></hr>
        <div className="flex flex-col justify-center space-y-5  ">
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
          <div className="mx-10 mt-5">
            <button className="btn bg-black text-white hover:text-black w-full">
              Log In
            </button>
            <p className=" font-semibold mt-5 text-center">Do Not Have An Account ? <Link to={'/register'}><span className=" text-red-500">Register</span></Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
