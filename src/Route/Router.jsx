import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import NewsDetails from "../Pages/NewsDetails";
import CategoryPage from "../Pages/CategoryPage";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
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
          element:<PrivateRoute><NewsDetails/></PrivateRoute>,
          loader: () => fetch('../news.json')
        },
        {
          path: '/category/:id',
          element: <CategoryPage/>,
          loader: () => fetch('../news.json')

        },
        {
          path:'/login',
          element:<LogIn/>
        },
        {
          path:'/register',
          element:<Register/>
        }
    ]
  },
]);

export default Router;
