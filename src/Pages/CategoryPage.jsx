import { useLoaderData, useParams } from "react-router-dom";
import {
  FaStar,
  FaRegStar,
  FaEye,
  FaBookmark,
  FaShareNodes,
} from "react-icons/fa6";
import Rating from "react-rating";
import { Link } from "react-router-dom";
import LeftSideNav from "../Components/LeftSideNav/LeftSideNav";
import RIghtSideNav from "../Components/RightSideNav/RIghtSideNav";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import { Helmet } from "react-helmet";

const CategoryPage = () => {
  const allNews = useLoaderData();
  const { id } = useParams();

  const filterId = allNews.filter((news) => news.category_id === id);

  console.log(filterId);
  return (
    <div className="max-w-screen-2xl mx-auto px-4 my-5">
      <Helmet><title>Home</title></Helmet>
        <Header/>
        <Navbar/>
      <div className="grid lg:grid-cols-4">
        <div className="sticky">
        <LeftSideNav />
        </div>
        <div className="lg:col-span-2">
          {filterId.map((news, idx) => {
            return (
              <div className="mx-3" key={idx}>
                <div className="card  mb-10 bg-base-100 shadow-xl">
                  <div className="flex rounded-t-xl justify-between items-center p-3 bg-slate-100">
                    <div className="flex gap-2 items-center">
                      <img
                        className="w-10 h-10 lg:h-auto rounded-full"
                        src={news.author.img}
                      ></img>
                      <div className="flex justify-center flex-col">
                        <p>
                          {news.author.name ? news.author?.name : "Unknown"}
                        </p>
                        <p>
                          {news.author.published_date
                            ? news.author?.published_date
                            : "N/A"}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <span>
                        <FaBookmark />
                      </span>
                      <span>
                        <FaShareNodes />
                      </span>
                    </div>
                  </div>
                  <div className="card-body items-center text-center">
                    <h2 className="card-title text-left">{news.title}</h2>
                    <figure className="py-5">
                      <img
                        src={news.image_url}
                        alt={news.title}
                        className="rounded-xl"
                      />
                    </figure>
                    {news.details.length > 200 ? (
                      <p className="text-left">
                        {news.details.slice(0, 200)}{" "}
                        <Link
                          to={`/news/${news._id}`}
                          className="text-blue-500 font-bold"
                        >
                          Read More...
                        </Link>
                      </p>
                    ) : (
                      <p className="text-left">{news.details}</p>
                    )}
                  </div>
                  <hr className="mx-10 mb-5"></hr>
                  <div className="flex mb-5 justify-between mx-10">
                    <p className="flex items-center gap-2">
                      <Rating
                        initialRating={news.rating.number}
                        emptySymbol={<FaRegStar className="text-orange-400" />}
                        fullSymbol={<FaStar className="text-orange-400" />}
                      />
                      {news.rating.number}
                    </p>
                    <p className="flex items-center gap-2">
                      <FaEye />
                      {news.total_view}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="sticky">
        <RIghtSideNav />
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
