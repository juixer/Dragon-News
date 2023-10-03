import { FaGoogle, FaGithub } from "react-icons/fa6";
const RIghtSideNav = () => {
  return (
    <div>
      <div className="space-y-2 m-3">
        <button className="btn text-xl  border border-sky-500 text-sky-500 w-full">
          <FaGoogle />
          Login with Google
        </button>
        <button className="btn text-xl border border-black text-black w-full">
          <FaGithub/>
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default RIghtSideNav;
