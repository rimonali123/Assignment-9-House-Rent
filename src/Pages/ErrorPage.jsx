import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center  justify-center flex flex-col items-center mt-64">
            <Helmet>
                <title>404 Error Details</title>
            </Helmet>
            <img src="https://www.pinterest.com/pin/1094093303205656776/" alt="" />
            <h1 className="text-4xl font-extrabold">404</h1>
            <p className="text-2xl font-semibold md:text-3xl">Sorry, we could not find this page.</p>
            <p className="mt-4 mb-8 ">But dont worry, you can find plenty of other things on our homepage.</p>
            <button className="btn btn-primary text-white" ><NavLink to="/">Back to home page</NavLink></button>
        </div>
        
    );
};

export default ErrorPage;