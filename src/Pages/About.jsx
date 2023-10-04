import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 my-5">
      <Helmet><title>About Us</title></Helmet>
        <Header/>
        <Navbar/>
      <div className="mt-10">
        <h1 className="text-2xl text-center lg:text-left font-semibold mb-3">
          Find Us On
        </h1>
        <a
          href="#"
          className="flex p-3 gap-3 border-stone-400 rounded-t-xl items-center text-2xl hover:bg-slate-200 border text-blue-500 w-full"
        >
          <FaFacebook />
          Facebook
        </a>
        <a
          href="#"
          className="flex p-3 gap-3 items-center border-x border-stone-400 text-2xl hover:bg-slate-200 text-sky-500 w-full"
        >
          <FaTwitter />
          Twitter
        </a>
        <a
          href="#"
          className="flex p-3 gap-3 rounded-b-xl border-stone-400 items-center text-2xl hover:bg-slate-200 border text-orange-500 w-full"
        >
          <FaInstagram />
          Instagram
        </a>
      </div>
    </div>
  );
};

export default About;
