import Header from "../Components/Header/Header";
import Marquee from "react-fast-marquee";
import Navbar from "../Components/Navbar/Navbar";
import { Helmet } from "react-helmet";
import RIghtSideNav from "../Components/RightSideNav/RIghtSideNav";
import LeftSideNav from "../Components/LeftSideNav/LeftSideNav";
import News from "../Components/News/News";
import { useEffect, useState } from "react";


const Home = () => {
  const [allNews, setAllNews] = useState([]);
  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setAllNews(data));
  }, []);
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
          <p className="mr-10 text-xl">Valorant giving all free skins!</p>
          <p className="mr-10 text-xl">Counter-Strike 2 is out now!</p>
          <p className="mr-10 text-xl">Apex Legend is dead game!</p>
          <p className="mr-10 text-xl">Ben 10 becomes Brimstone!</p>
        </Marquee>
      </div>
      <Navbar />
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4">
        <div>
          <LeftSideNav />
        </div>
        <div className="lg:col-span-2">
          {allNews.map((news) => {
            return <News key={news._id} news={news} />;
          })}
        </div>
        <div>
          <RIghtSideNav />
        </div>
      </div>
      
    </div>
  );
};

export default Home;
