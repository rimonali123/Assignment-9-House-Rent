

import { useLoaderData } from "react-router-dom";
import StudentCard from "../Components/StudentCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet-async";
AOS.init();

const StudentHousing = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className="mx-2">
            <Helmet>
                <title>Student Housing card | Home Rent</title>
            </Helmet>
            <h1 data-aos="fade-up" data-aos-duration="1500" className="text-base lg:text-3xl font-bold  w-[400px] md:w-[700px] mx-auto text-center mt-3 uppercase bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">Our Student Estate</h1>
            <p data-aos="fade-down" data-aos-duration="1500" className="max-w-[700px] mx-auto mt-5 text-center">Our Student Estate offers a vibrant community tailored for academic success and personal growth. With modern amenities, spacious accommodations, we foster collaboration and creativity. From well-equipped study spaces to engaging social activitiesJoin us for an enriching living experience where learning extends beyond the classroom.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-10 mb-10">
                {
                    data.map(item => <StudentCard item={item} key={item.id}></StudentCard>)
                }
            </div>

        </div>
    );
};

export default StudentHousing;