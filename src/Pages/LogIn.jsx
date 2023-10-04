import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { Helmet } from "react-helmet";
import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import useAuth from "../Hook/useAuth";
import { toast } from "react-toastify";

const LogIn = () => {
  const [showPass, setPassword] = useState(true);
  const location = useLocation()
  const navigate = useNavigate();
  const { signInWithEmail, forgetPassword } = useAuth();
  // signIN
  const handelSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // signIn FUnction
    signInWithEmail(email, password)
      .then(() => {
        toast.success("LogIn successful");
      })
      .catch((err) => toast.error(err.message));
    navigate(location?.state ? location.state : '/');
  };
  // forget password
  const emailRef = useRef();
  const handleForgetPassword = () => {
    const email = emailRef.current.value;
    if(!email){
      return toast.error('Please Provide Your Email')
    }
    forgetPassword(email)
    .then(() => {
      toast.success("Please check your Email")
    })
    .catch((err) => toast.error(err.message))
  };
  // showpassword
  const handelShowPassword = () => {
    setPassword(!showPass);
  };
  return (
    <div className="max-w-screen-2xl mx-auto px-4 my-5">
      <Helmet>
        <title>Log In</title>
      </Helmet>
      <Navbar />
      <div className="max-w-3xl mx-auto border py-10 bg-slate-100 rounded-xl">
        <h1 className="text-4xl mb-8 font-semibold text-center">
          Login your account
        </h1>
        <hr className="mx-10"></hr>
        <form onSubmit={handelSignIn}>
          <div className="flex flex-col justify-center space-y-5  ">
            <div className="mx-10 mt-5">
              <h1 className="text-xl font-bold">Email address</h1>
              <input
                type="email"
                name="email"
                ref={emailRef}
                required
                placeholder="Type your Email here"
                className="input input-bordered input-md w-full"
              />
            </div>
            <div className="mx-10 mt-5">
              <h1 className="text-xl font-bold">Password</h1>
              <div className="flex items-center">
                <input
                  type={showPass ? "password" : "text"}
                  name="password"
                  required
                  placeholder="Type your Password here"
                  className="input input-bordered input-md w-full"
                />
                <span className="-ml-8" onClick={handelShowPassword}>
                  {showPass ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
            </div>
            <div className="mx-10 mt-5">
              <p onClick={handleForgetPassword} className="mb-3 font-bold">
                Forget Password?
              </p>
              <button className="btn bg-black text-white hover:text-black w-full">
                Log In
              </button>
              <p className=" font-semibold mt-5 text-center">
                Do Not Have An Account ?{" "}
                <Link to={"/register"}>
                  <span className=" text-red-500">Register</span>
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
