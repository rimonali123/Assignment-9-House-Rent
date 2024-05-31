// import EstateCard from "../Components/EstateCard";

import { useLoaderData } from "react-router-dom";
import TownHouseCard from "../Components/TownHouseCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet-async";
AOS.init();

const TownHouse = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className="mx-2">
            <Helmet>
                <title>TownHouse Card | Home Rent</title>
            </Helmet>
            <h1 data-aos="zoom-in" data-aos-duration="1500" className="text-base lg:text-3xl font-bold  w-[400px] md:w-[700px] mx-auto text-center mt-3 uppercase bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">Our Town House Estate</h1>
            <p data-aos="fade-right" data-aos-duration="1500" className="max-w-[700px] mx-auto mt-5 text-center">Our Town House Estate offers a timeless blend of elegance and modern comfort. Nestled in a picturesque setting, it boasts spacious townhouses with refined interiors and scenic views. Residents enjoy exclusive amenities, from a well-appointed clubhouse to lush green spaces. With its convenient location and serene ambiance, its the epitome of sophisticated urban living.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-10 mb-10">
                {
                    data.map(item => <TownHouseCard item={item} key={item.id}></TownHouseCard>)
                }
            </div>

        </div>
    );
};

export default TownHouse;