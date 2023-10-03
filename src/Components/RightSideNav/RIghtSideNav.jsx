import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa6";
import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";
import adBg from "../../assets/bg.png";
const RIghtSideNav = () => {
  const bg = {
    backgroundImage: `url(${adBg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="m-3 lg:sticky lg:top-5">
      <div className="lg:h-[900px] lg:overflow-y-scroll">
        <div className="space-y-2">
          <h1 className="text-2xl text-center lg:text-left font-semibold">
            Login With
          </h1>
          <button className="btn text-lg bg-white  border border-sky-500 text-sky-500 w-full">
            <FaGoogle />
            Login with Google
          </button>
          <button className="btn bg-white text-lg border border-black text-black w-full">
            <FaGithub />
            Login with Github
          </button>
        </div>
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
        <div className="mt-10 space-y-2">
          <h1 className="text-2xl text-center lg:text-left font-semibold mb-3">
            Q-Zone
          </h1>
          <div className="flex justify-center flex-col space-y-10">
            <img src={qZone1}></img>
            <img src={qZone2}></img>
            <img src={qZone3}></img>
          </div>
        </div>
        <div className="mt-10 px-5 py-20 rounded-xl" style={bg}>
          <h1 className="text-4xl mb-10 text-white font-bold text-center">
            Create an Amazing Newspaper
          </h1>
          <p className="text-xl mb-10 font-medium text-center text-white">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <div className="flex justify-center">
            <button className="btn border-none text-white hover:text-black bg-red-500">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RIghtSideNav;
