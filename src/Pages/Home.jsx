
import { Link } from "react-router-dom";
import Slider from "../Components/Slider";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaHome, } from "react-icons/fa";
import { HiHomeModern } from "react-icons/hi2";
import { MdApartment, MdOutlineHomeWork } from "react-icons/md";
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import { SiEsphome } from "react-icons/si";
import { CiHome } from "react-icons/ci";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet-async";
AOS.init();


const Home = () => {

    return (

        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Slider></Slider>
            <div  id="about">
                <h1 className="text-4xl font-bold text-center mb-5 mt-5">Our Estates</h1>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}

                    breakpoints={{
                        350: {
                            slidesPerView: 2,
                            spaceBetween: 0,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 0,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 0,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Link to='/singleFamily' ><div className=" bg-base-100 border border-r-0 h-[200px] flex items-center">
                            <div>
                                <figure className="px-5 pt-5 ">
                                    <p className="text-6xl ml-14"><FaHome /></p>
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-xl font-bold">Single Family Homes</h2>

                                </div>
                            </div>
                        </div>
                        </Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/townhouse' ><div className=" bg-base-100 border border-r-0 h-[200px] flex items-center">
                            <div>
                                <figure className="px-5 pt-5 ">
                                    <p className="text-6xl ml-14"><HiHomeModern /></p>

                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-xl font-bold">Townhouses</h2>

                                </div>
                            </div>
                        </div></Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/apartment' ><div className=" bg-base-100 border border-r-0 h-[200px] flex items-center">
                            <div>
                                <figure className="px-5 pt-5 ">

                                    <p className="text-6xl ml-14"><MdApartment /></p>
                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-xl font-bold">Apartments</h2>

                                </div>
                            </div>
                        </div></Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/studentHousing' ><div className=" bg-base-100 border border-r-0 h-[200px] flex items-center">
                            <div>
                                <figure className="px-5 pt-5 ">
                                    <p className="text-6xl ml-14"><MdOutlineHomeWork /></p>

                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-xl font-bold">Student Housing</h2>

                                </div>
                            </div>
                        </div></Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/seniorCommunity' ><div className=" bg-base-100 border border-r-0 h-[200px] flex items-center">
                            <div>
                                <figure className="px-5 pt-5 ">
                                    <p className="text-6xl ml-14"><CiHome /></p>

                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-xl font-bold">Senior Living Communities</h2>

                                </div>
                            </div>
                        </div></Link>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Link to='/vacation' ><div className=" bg-base-100 border h-[200px] flex items-center">
                            <div>
                                <figure className="px-5 pt-5 ">
                                    <p className="text-6xl ml-14"><SiEsphome /></p>

                                </figure>
                                <div className="card-body items-center text-center">
                                    <h2 className="card-title text-xl font-bold">Vacation Rentals</h2>

                                </div>
                            </div>
                        </div></Link>
                    </SwiperSlide>

                </Swiper>



            </div>
            <div className=" mt-10 ">
                <h1 data-aos="fade-up" data-aos-duration="1000" className="text-2xl md:text-5xl font-bold text-center text-red-500">About Us</h1>
                <p data-aos="zoom-in" data-aos-duration="1500" className="text-base lg:text-3xl font-bold   md:w-[700px] mx-auto text-center mt-3 uppercase bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">WelCome to our House Rent company</p>

                <div className="flex mt-10 flex-col-reverse md:flex-row items-center gap-10">
                    <div className="flex-1">
                        <h1 data-aos="zoom-in" data-aos-duration="1500" className="text-xl md:text-4xl font-bold bg-gradient-to-r from-green-400 via-orange-700 to-green-400 text-transparent bg-clip-text animate-gradient ml-2">About our Company & Terms :</h1>

                        <div>
                            <div className="collapse collapse-arrow ">
                                <input type="radio" name="my-accordion-2" defaultChecked />
                                <div className="collapse-title text-xl font-medium text-violet-500">
                                    Property Management
                                </div>
                                <div className="collapse-content">
                                    <p>Managing properties on behalf of owners, which may involve finding tenants, collecting rent, handling maintenance and repairs, and ensuring compliance with local regulations.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow ">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium text-violet-500">
                                    Brokerage Services
                                </div>
                                <div className="collapse-content">
                                    <p>Facilitating the buying, selling, or leasing of properties by connecting buyers and sellers and helping them navigate the transaction process.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow ">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium text-violet-500">
                                    Development
                                </div>
                                <div className="collapse-content">
                                    <p>Engaging in the development of real estate projects, which can include land acquisition, construction, and marketing of new developments.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow ">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium text-violet-500">
                                    Appraisal
                                </div>
                                <div className="collapse-content">
                                    <p>An assessment of the value of a property conducted by a qualified appraiser.</p>
                                </div>
                            </div>
                            <div className="collapse collapse-arrow ">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium text-violet-500">
                                    Down Payment
                                </div>
                                <div className="collapse-content">
                                    <p>The initial payment made by the buyer when purchasing a property, typically a percentage of the total purchase price. The remainder of the purchase price is usually financed through a mortgage loan.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in" data-aos-duration="1500">
                        <img src="https://i.ibb.co/NnvwQ39/images.png" alt="" className="w-96 h-96 rounded-full border" />
                    </div>
                </div>
                <div className="p-5 md:p-10 mt-10 bg-gray-600  text-white text-4xl font-bold grid grid-cols-1 md:grid-cols-4 py-4 gap-10 md:gap-16 lg:gap-28 text-center w-full  mx-auto items-center">
                    <h1 data-aos="zoom-in" data-aos-duration="1000">2500 Clients</h1>
                    <h1 data-aos="fade-up" data-aos-duration="1000">3055 Bookings</h1>
                    <h1 data-aos="zoom-in" data-aos-duration="1000">100 Swimming</h1>
                    <h1 data-aos="fade-down" data-aos-duration="1000">1540 Apartment</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;