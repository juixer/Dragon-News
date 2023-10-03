import Header from "../Components/Header/Header";
import Marquee from "react-fast-marquee";
import Navbar from "../Components/Navbar/Navbar";
import { Helmet } from "react-helmet";
import RIghtSideNav from "../Components/RightSideNav/RIghtSideNav";
import LeftSideNav from "../Components/LeftSideNav/LeftSideNav";
import { useLoaderData } from "react-router-dom";
import News from "../Components/News/News";

const Home = () => {
  const allNews = useLoaderData();
  return (
    <div className="max-w-screen-2xl mx-auto px-4 my-5">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Header />
      <div className="flex items-center">
        <button className="btn btn-sm text-white hover:bg-rose-700 bg-rose-400 ">
          Latest
        </button>
        <Marquee speed={100}>
          <p className="mr-10 text-xl">Luffy is dead!</p>
          <p className="mr-10 text-xl">FireForce can not rid off rain!</p>
          <p className="mr-10 text-xl">Counter Strick 2 is out now!</p>
          <p className="mr-10 text-xl">Horimiya is top tier anime!</p>
          <p className="mr-10 text-xl">Ben 10 becomes Brimstone</p>
        </Marquee>
      </div>
      <Navbar />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
        <div><LeftSideNav/></div>
        <div className="lg:col-span-2 border">
        {
              allNews.map(news => {
                return <News key={news._id} news={news}/>
              })
            }
        </div>
        <div><RIghtSideNav/></div>
      </div>
    </div>
  );
};

export default Home;
