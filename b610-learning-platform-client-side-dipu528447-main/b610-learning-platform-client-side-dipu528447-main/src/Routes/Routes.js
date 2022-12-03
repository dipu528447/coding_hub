import { createBrowserRouter } from "react-router-dom";
import Category from "../Components/Category/Category";
import Courses from "../Components/Courses/Courses";
import Main from "../Components/Main/Main";
import CourseDetails from "../Components/CourseDetails/CourseDetails";
import Checkout from "../Components/Checkout/Checkout";
import Login from "../Components/Login/Login";
import Registration from "../Components/Registration/Registration";
import PrivateRoutes from "./PrivateRoutes";
import Blog from "../Components/Blogs/Blog";


export const router=createBrowserRouter([
    {
      path:'/', element:<Main></Main>, children:[
        {
            path:'/', element:<Courses></Courses>,loader:()=>fetch('http://localhost:5000/category') 
        },
        {
            path:'/category/:id', element:<Category></Category>,loader: ({params})=> fetch(`http://localhost:5000/category/${params.id}`)
        },
        {
            path:'/categoryDetails/:id', element:<CourseDetails></CourseDetails>,loader: ({params})=> fetch(`http://localhost:5000/categoryDetails/${params.id}`)
        },
        {
            path:'/checkout/:id', element:<PrivateRoutes><Checkout></Checkout></PrivateRoutes>,loader: ({params})=> fetch(`http://localhost:5000/checkout/${params.id}`)
        },
      ]
    },
    {
        path:'/faq', element:<h1>Faq</h1>
    },
    {
        path:'/blog', element:<Blog/>
    },
    {
        path:'/login', element:<Login></Login>
    },
    {
        path:'/registration', element:<Registration></Registration>
    },
    {
        path:'/*', element:<div><h1 className="text-7xl">ERROR:404::Not Found</h1><p className="text-4xl">please go back...</p></div>
    }
    
  ])