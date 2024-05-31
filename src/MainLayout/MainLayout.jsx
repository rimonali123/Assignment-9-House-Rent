import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";


const MainLayout = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto ">
                <NavBar></NavBar>
                <Outlet></Outlet>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;