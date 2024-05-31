

import {  useLoaderData } from "react-router-dom";
import VacationCard from "../Components/VacationCard";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Helmet } from "react-helmet-async";
AOS.init();

const Vacation = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className="mx-2">
            <Helmet>
                <title>Vacation Rentals Card | Home Rent</title>
            </Helmet>
            <h1 data-aos="zoom-out"  data-aos-duration="1500" className="text-base lg:text-3xl font-bold  w-[400px] md:w-[700px] mx-auto text-center mt-3 uppercase bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">Our Vacation Rentals Estate</h1>
            <p data-aos="fade-left"  data-aos-duration="1500" className="max-w-[700px] mx-auto mt-5 text-center">Experience unparalleled luxury and comfort with Our Vacation Rentals Estate. Indulge in breathtaking views, exquisite amenities, and personalized service. Whether its a cozy cabin retreat or a lavish beachfront villa, we offer a diverse range of properties to suit every travelers dream getaway. Your perfect vacation starts here.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-10 mb-10">
            {
               data.map(item => <VacationCard item={item} key={item.id}></VacationCard>)
            }
            </div>
            
        </div>
    );
};

export default Vacation;