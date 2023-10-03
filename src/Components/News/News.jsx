import { FaStar, FaRegStar, FaEye,FaBookmark, FaShareNodes } from "react-icons/fa6";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const News = ({ news }) => {
  const {_id, title, image_url, details, rating, total_view, author } = news;
  return (
    <div className="mx-3">
      <div className="card  mb-10 bg-base-100 shadow-xl">
      <div className="flex rounded-t-xl justify-between items-center p-3 bg-slate-100">
            <div className="flex gap-5">
              <img className="w-12 rounded-full" src={author.img}></img>
              <div className="flex justify-center items-center flex-col">
                <p>{author.name ? author?.name : 'Unknown'}</p>
                <p>{author.published_date ? author?.published_date : "N/A"}</p>
              </div>
            </div>
            <div className="flex gap-4">
                <span><FaBookmark/></span>
                <span><FaShareNodes/></span>
            </div>
          </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-left">{title}</h2>
          <figure className="py-5">
            <img src={image_url} alt={title} className="rounded-xl" />
          </figure>
          {
            details.length > 200 ? <p>{details.slice(0,200)} <Link to={`/news/${_id}`} className="text-blue-500 font-bold">Read More...</Link></p> : <p>{details}</p>
          }
        </div>
        <hr className="mx-10 mb-5"></hr>
        <div className="flex mb-5 justify-between mx-10">
          <p className="flex items-center gap-2">
            <Rating
              initialRating={rating.number}
              emptySymbol={<FaRegStar className="text-orange-400" />}
              fullSymbol={<FaStar className="text-orange-400" />}
            />
            {rating.number}
          </p>
          <p className="flex items-center gap-2">
            <FaEye />
            {total_view}
          </p>
        </div>
      </div>
    </div>
  );
};

export default News;
