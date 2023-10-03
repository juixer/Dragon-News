import { Link } from "react-router-dom";

const Category = ({category}) => {
    const {id,name} = category;
    return (
        <div>
            <Link to={`/category/${id}`}><p className=" text-xl font-semibold p-4 hover:bg-slate-200 rounded-lg">{name}</p></Link>
        </div>
    );
};

export default Category;