import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import NewsDetails from "../Pages/NewsDetails";
const Router = createBrowserRouter([
  {
    path: "/",
    element:<Root/>,
    children:[
        {
            path: '/',
            element:<Home/>
        },
        {
          path:'/news/:id',
          element:<NewsDetails/>,
          loader: () => fetch('../news.json')
        }
    ]
  },
]);

export default Router;
