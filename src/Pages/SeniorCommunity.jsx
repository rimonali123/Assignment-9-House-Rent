

import { useLoaderData } from "react-router-dom";
import SeniorCommunityCard from "../Components/SeniorCommunityCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet-async";
AOS.init();

const
    SeniorCommunity = () => {
        const data = useLoaderData()
        console.log(data)
        return (
            <div className="mx-2">
                <Helmet>
                    <title>Senior Community Card | Home Rent</title>
                </Helmet>
                <h1 data-aos="fade-up" data-aos-duration="1500" className="text-base lg:text-3xl font-bold  w-[400px] md:w-[700px] mx-auto text-center mt-3 uppercase bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">Our Senior Community Estate</h1>
                <p data-aos="fade-right" data-aos-duration="1500" className="px-2 lg:w-[700px] mx-auto mt-5 text-center">Welcome to our Senior Community Estate, where comfort meets convenience. Nestled amidst tranquil surroundings, our estate offers a vibrant lifestyle tailored to retirees. Enjoy a range of amenities. Experience retirement living at its finest, where every day is an opportunity for enrichment and connection.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 lg:gap-10 mt-10 mb-10">
                    {
                        data.map(item => <SeniorCommunityCard item={item} key={item.id}></SeniorCommunityCard>)
                    }
                </div>


            </div>
        );
    };

export default SeniorCommunity;