import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import ContactMe from "../Pages/ContactMe/ContactMe";
import Home from "../Pages/Home/Home";
import ComfortZone from "../Pages/ProjectDetails/ComfortZone";
import CookForYourself from "../Pages/ProjectDetails/CookForYourself/CookForYourself";
import Onclub from "../Pages/ProjectDetails/Onclub/Onclub";
import ProgrammingCourses from "../Pages/ProjectDetails/ProgrammingCourses/ProgrammingCourses";
import TahminasKitchen from "../Pages/ProjectDetails/TahminasKitchen/TahminasKitchen";
import TestYourself from "../Pages/ProjectDetails/TestYourself/TestYourself";
import Fitlessian from "../Pages/ProjectDetails/Fitlessian/Fitlessian";

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
                path:'/onClub',
                element:<Onclub></Onclub>
            },
            {
                path:'/fitlessian',
                element:<Fitlessian></Fitlessian>
            }
        ]
    }
])
export default router;