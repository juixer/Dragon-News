import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";
import RIghtSideNav from "../Components/RightSideNav/RIghtSideNav";
import { Helmet } from "react-helmet";

const NewsDetails = () => {
    const {id} = useParams();
    const news = useLoaderData()
    const foundNews = news.find(news => news._id === id)
    const {image_url, title, details} = foundNews;
    console.log(foundNews);
    return (
        <div className="max-w-screen-2xl mx-auto px-4 my-5">
            <Helmet> <title>{title}</title></Helmet>
            <Header/>
            <Navbar/>
            <div className="grid lg:grid-cols-4 gap-5">
                <div className="lg:col-span-3">
                    <img className="w-full" src={image_url}></img>
                    <h1 className="text-4xl mt-5 font-semibold">{title}</h1>
                    <p className="text-lg mt-5">{details}</p>
                </div>
                <RIghtSideNav/>
            </div>
        </div>
    );
};

export default NewsDetails;