import { FaCalendar } from "react-icons/fa6";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import { useEffect, useState } from "react";
import Category from "../Category/Category";
import { Link } from "react-router-dom";
const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("../Categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="m-3 lg:sticky lg:top-5">
      <div>
        <div className="lg:flex grid grid-cols-2 justify-center items-center lg:flex-col">
          <Link to={'/'}><h1 className="text-2xl hover:bg-slate-200 rounded-lg p-3 text-center lg:text-left font-semibold">
            All Category
          </h1></Link>
          {categories.map((category) => {
            return <Category key={category.id} category={category} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
