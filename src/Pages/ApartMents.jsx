import ApartmentCard from "../Components/ApartmentCard";

import { useLoaderData } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet-async";
AOS.init();

const ApartMents = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className="mx-2">
            <Helmet>
                <title>Apartment Card | Home Rent</title>
            </Helmet>
            <h1 data-aos="fade-down" data-aos-duration="1500" className="text-base lg:text-3xl font-bold  w-[400px] md:w-[700px] mx-auto text-center mt-3 uppercase bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">Our Apartment Estate</h1>
            <p data-aos="fade-right" data-aos-duration="1500" className="max-w-[700px] mx-auto mt-5 text-center">Our Apartment Estate offers modern living in a vibrant community. Nestled in a prime location, our meticulously designed apartments boast sleek interiors and top-notch amenities. From fitness centers to communal spaces. With convenient access to transportation and local attractions, come experience urban living at its finest with us.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-10 mb-10">
                {
                    data.map(item => <ApartmentCard item={item} key={item.id}></ApartmentCard>)
                }
            </div>

        </div>
    );
};

export default ApartMents;