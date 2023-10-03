import { FaCalendar } from "react-icons/fa6";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import { useEffect, useState } from "react";
import Category from "../Category/Category";
const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("Categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="m-3 lg:sticky lg:top-5">
      <div className="h-[900px] overflow-y-scroll">
        <div>
          <h1 className="text-2xl text-center lg:text-left font-semibold mb-3">
            All Category
          </h1>
          {categories.map((category) => {
            return <Category key={category.id} category={category} />;
          })}
        </div>
        <div className="space-y-10 mt-10">
          <div className="flex flex-col justify-center">
            <img src={img1} />
            <h1 className="text-xl text-center lg:text-left font-medium mb-3">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h1>
            <div className="flex gap-10">
              <p className="font-bold">Sports</p>
              <p className="font-extralight flex items-center gap-3">
                <FaCalendar /> Jan 4, 2022
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <img src={img2} />
            <h1 className="text-xl text-center lg:text-left font-medium mb-3">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h1>
            <div className="flex gap-10">
              <p className="font-bold">Sports</p>
              <p className="font-extralight flex items-center gap-3">
                <FaCalendar /> Jan 4, 2022
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <img src={img3} />
            <h1 className="text-xl text-center lg:text-left font-medium mb-3">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h1>
            <div className="flex gap-10">
              <p className="font-bold">Sports</p>
              <p className="font-extralight flex items-center gap-3">
                <FaCalendar /> Jan 4, 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
