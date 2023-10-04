import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";
import useAuth from "../Hook/useAuth";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

const Register = () => {
  const { signUpWithEmail, updateUser } = useAuth();
  const [showPass, setPassword] = useState(true);
  const navigate = useNavigate()
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    const checkbox = e.target.checkbox.checked;
    const photo = e.target.photo.value;

    // conditional
    if (password !== confirmPassword) {
      return toast.error("Password does not match");
    } else if (checkbox === false) {
      return toast.error("Please accept terms and conditions");
    } else if (password.length < 6) {
      return toast.error("Password should be at least 6 characters");
    }
    signUpWithEmail(email, password)
      .then(() => {
        updateUser(name, photo)
          .then(() => {
            toast.success("registered successfully");
          })
          .then((err) => toast.error(err.message));
          
      })
      .catch((err) => toast.error(err.message));
      navigate('/')
  };
  // showpassword
  const handelShowPassword = () => {
    setPassword(!showPass);
  };
  return (
    <div className="max-w-screen-2xl mx-auto px-4 my-5">
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Navbar />
      <div className="max-w-3xl mx-auto border py-10 bg-slate-100 rounded-xl">
        <h1 className="text-4xl mb-8 font-semibold text-center">
          Register your account
        </h1>
        <hr className="mx-10"></hr>
        <form onSubmit={handleRegister}>
          <div className="flex flex-col justify-center space-y-5  ">
            <div className="mx-10 mt-5">
              <h1 className="text-xl font-bold">Your Name</h1>
              <input
                type="name"
                name="name"
                required
                placeholder="Type your Name here"
                className="input input-bordered input-md w-full"
              />
            </div>
            <div className="mx-10 mt-5">
              <h1 className="text-xl font-bold">Photo URL</h1>
              <input
                type="text"
                name="photo"
                required
                placeholder="Type your Photo URL here"
                className="input input-bordered input-md w-full"
              />
            </div>
            <div className="mx-10 mt-5">
              <h1 className="text-xl font-bold">Email address</h1>
              <input
                type="email"
                name="email"
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
                <span  className="-ml-8" onClick={handelShowPassword}>
                  {showPass ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
            </div>
            <div className="mx-10 mt-5">
              <h1 className="text-xl font-bold">Confirm Password</h1>
              <div className="flex items-center">
                <input
                  type={showPass ? "password" : "text"}
                  name="confirmPassword"
                  placeholder="Confirm your Password here"
                  className="input input-bordered input-md w-full"
                />
                <span className="-ml-8" onClick={handelShowPassword}>
                {showPass ? <FaEye /> : <FaEyeSlash />}
              </span>
              </div>
            </div>
            <div className="mx-10 mt-5 flex items-center gap-3">
              <input type="checkbox" name="checkbox" className="input w-6" />
              <p className="text-xl">
                Accept <span className="font-bold">Term & Conditions</span>
              </p>
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
        </form>
      </div>
    </div>
  );
};

export default Register;
