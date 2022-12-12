import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Blog from "../Pages/Blog/Blog";
import ContactMe from "../Pages/ContactMe/ContactMe";
import Home from "../Pages/Home/Home";
import ComfortZone from "../Pages/ProjectDetails/ComfortZone";
import CookForYourself from "../Pages/ProjectDetails/CookForYourself/CookForYourself";
import ProgrammingCourses from "../Pages/ProjectDetails/ProgrammingCourses/ProgrammingCourses";
import TahminasKitchen from "../Pages/ProjectDetails/TahminasKitchen/TahminasKitchen";
import TestYourself from "../Pages/ProjectDetails/TestYourself/TestYourself";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <ContactMe></ContactMe>
            },
            {
                path: '/tahminasKitchen',
                element: <TahminasKitchen></TahminasKitchen>

            },
            {
                path: '/comfortZone',
                element: <ComfortZone></ComfortZone>
            },
            {
                path:'/programmingCourses',
                element:<ProgrammingCourses></ProgrammingCourses>
            },
            {
                path:'/cookForYourself',
                element:<CookForYourself></CookForYourself>
            },
            {
                path:'/testYourself',
                element:<TestYourself></TestYourself>
            },
            {
                path: '/aboutMe',
                element: <AboutMe></AboutMe>
            }
        ]
    }
])
export default router;