import Header from "../Components/Header/Header";
import Marquee from "react-fast-marquee";
import Navbar from "../Components/Navbar/Navbar";

const Home = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4">
      <Header />
      <div className="flex items-center mt-7">
        <button className="btn btn-sm text-white hover:bg-rose-700 bg-rose-400 ">
          Latest
        </button>
        <Marquee
        speed={100}
        >
          <p className="mr-10 text-xl">Luffy is dead!</p>
          <p className="mr-10 text-xl">FireForce can not rid off rain!</p>
          <p className="mr-10 text-xl">Counter Strick 2 is out now!</p>
          <p className="mr-10 text-xl">Horimiya is top tier anime!</p>
          <p className="mr-10 text-xl">Ben 10 becomes Brimstone</p>
        </Marquee>
      </div>
      <Navbar/>
    </div>
  );
};

export default Home;
