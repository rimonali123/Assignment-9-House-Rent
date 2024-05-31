import EstateCard from "../Components/EstateCard";

import {  useLoaderData } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Helmet } from "react-helmet-async";
AOS.init();

const SingleFamily = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className="mx-2">
            <Helmet>
                <title>Single Family Card | Home Rent</title>
            </Helmet>
            <h1 data-aos="fade-down"  data-aos-duration="1500" className="text-base lg:text-3xl font-bold  w-[400px] md:w-[700px] mx-auto text-center mt-3 uppercase bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">Our Single Family Estate</h1>
            <p data-aos="fade-left"  data-aos-duration="1500" className="max-w-[700px] mx-auto mt-5 text-center">Experience opulent living in our exquisite Single Family Estate. Nestled amidst lush landscapes, this haven offers unparalleled privacy and luxury. Indulge in spacious interiors, meticulously designed for comfort and style. From grand living spaces to serene outdoor retreats, every corner exudes sophistication. Elevate your lifestyle in this prestigious sanctuary.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-10 mb-10">
            {
               data.map(item => <EstateCard item={item} key={item.id}></EstateCard>)
            }
            </div>
            
        </div>
    );
};

export default SingleFamily;