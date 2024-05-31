import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import UpdateProfile from "../Pages/UpdateProfile";
import UserProfile from "../Pages/UserProfile";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import EstateDetails from "../Pages/EstateDetails";
import PrivateRoot from "../Components/PrivateRoot/PrivateRoot";
import StudentHousing from "../Pages/StudentHousing";
import SeniorCommunity from "../Pages/SeniorCommunity";
import SingleFamily from "../Pages/SingleFamily";
import TownHouse from "../Pages/TownHouse";
import Vacation from "../Pages/Vacation";
import TownHouseDetails from "../Pages/TownHouseDetails";
import StudentDetails from "../Pages/StudentDetails";
import ApartMents from "../Pages/ApartMents";
import ApartmentDetails from "../Pages/ApartmentDetails";
import SeniorCommunityDetails from "../Pages/SeniorCommunityDetails";
import VacationDetails from "../Pages/VacationDetails";
import ContactUs from "../Pages/ContactUs";
// import EstateCategory from "../Pages/EstateCategory";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,

            },
            {
                path: "/ContactUs",
                element:<PrivateRoot><ContactUs></ContactUs></PrivateRoot>,
            },
            {
                path: "/singleFamily",
                element: <SingleFamily></SingleFamily>,
                loader: () => fetch("/SingleHomeData.json"),
            },
            {
                path: '/singleHomeDetails/:Id',
                element: <PrivateRoot><EstateDetails></EstateDetails></PrivateRoot>,
                loader: () => fetch("/SingleHomeData.json"),
            },
            {
                path: "/townhouse",
                element: <TownHouse></TownHouse>,
                loader: () => fetch("/TownHouseData.json"),
            },
            {
                path: "/townHouseDetails/:id1",
                element: <PrivateRoot><TownHouseDetails></TownHouseDetails></PrivateRoot>,
                loader: () => fetch("/TownHouseData.json")
            },
            {
                path: "/studentHousing",
                element: <StudentHousing></StudentHousing>,
                loader: () => fetch("/StudentHousingData.json"),
            },
            {
                path: '/studentDetails/:id2',
                element: <PrivateRoot><StudentDetails></StudentDetails></PrivateRoot>,
                loader: () => fetch("/StudentHousingData.json")
            },
            {
                path: "/apartment",
                element: <ApartMents></ApartMents>,
                loader: () => fetch("/ApartmentData.json"),
            },
            {
                path: '/apartmentDetails/:id3',
                element: <PrivateRoot><ApartmentDetails></ApartmentDetails></PrivateRoot>,
                loader: () => fetch("/ApartmentData.json"),
            },

            {
                path: "/seniorCommunity",
                element: <SeniorCommunity></SeniorCommunity>,
                loader: () => fetch("/Senior.json"),
            },
            {
                path: '/seniorCommunityDetails/:id4',
                element: <PrivateRoot><SeniorCommunityDetails></SeniorCommunityDetails></PrivateRoot>,
                loader: () => fetch("/Senior.json"),
            },

            {
                path: "/vacation",
                element: <Vacation></Vacation>,
                loader: () => fetch("/VacationData.json"),
            },
            {
                path: '/vacationDetails/:id5',
                element: <PrivateRoot><VacationDetails></VacationDetails></PrivateRoot>,
                loader: () => fetch("/VacationData.json"),
            },
            {
                path: "/UpdateProfile",
                element: <PrivateRoot><UpdateProfile></UpdateProfile></PrivateRoot>,
            },
            {
                path: "/UserProfile",
                element: <PrivateRoot><UserProfile></UserProfile></PrivateRoot>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
        ]


    }

]);