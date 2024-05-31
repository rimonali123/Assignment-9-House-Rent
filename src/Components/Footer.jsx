import { FcHome } from "react-icons/fc";
import { Link } from "react-router-dom";
import ScrollIntoView from 'react-scroll-into-view'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Footer = () => {
    return (
        <div>
            <footer className="footer lg:px-24 p-10 bg-slate-200 ">
                <div data-aos="zoom-in" data-aos-duration="1500">
                    <h6 data-aos="fade-up" data-aos-duration="1500" className="footer-title text-3xl md:text-2xl lg:text-4xl text-orange-500">About House Rent</h6>
                    <hr className="w-full border" />
                    <Link to='/'><a className="link link-hover flex text-4xl text-orange-500 gap-2"> <FcHome />House Rent</a></Link>
                    <p className="text-gray-500 text-base md:w-60 lg:w-96">Welcome to House Rent Company! We are your trusted house rental company, offering a diverse portfolio of comfortable, stylish homes. From cozy apartments to spacious villas, we ensure seamless rental experiences with transparent processes and dedicated support, helping you find your perfect sanctuary.</p>
                    <ScrollIntoView selector="#home" >
                        <button className="mdl-button mdl-js-button mdl-button--raised ">
                        <button  className="btn btn-warning text-white text-xl px-10 hover:btn-primary">More</button>
                        </button>
                    </ScrollIntoView>

                </div>
                <div data-aos="zoom-out" data-aos-duration="1500" className="ml-5 lg:ml-10">
                    <h6 data-aos="zoom-in" data-aos-duration="1500" className="footer-title text-3xl md:text-2xl lg:text-4xl text-orange-500">Place Category</h6>
                    <hr className="w-full border" />
                    <div className="flex flex-col space-y-4 text-2xl md:text-lg md:space-y-4 md:mt-7 lg:mt-1">
                        <Link to='singleFamily'><a className="link link-hover font-bold  lg:text-2xl">-- Flat for Sale <span className="text-amber-500">Francis</span></a></Link>
                        <Link to='/studentHousing'> <a className="link link-hover font-bold  lg:text-2xl">-- Flat for Rent <span className="text-amber-500">Collins St</span></a></Link>
                        <Link to='apartment'><a className="link link-hover font-bold  lg:text-2xl">-- Flat for Sale <span className="text-amber-500">Rose Ln</span></a></Link>
                        <Link to='/seniorCommunity'><a className="link link-hover font-bold  lg:text-2xl">-- Flat for Rent <span className="text-amber-500">Cosgrave Ln</span></a></Link>
                        <Link to='/townHouse'><a className="link link-hover font-bold  lg:text-2xl">-- Flat for Sale <span className="text-amber-500">Burks St</span></a></Link>
                        <Link to='/vacation'><a className="link link-hover font-bold  lg:text-2xl">-- Flat for Rent <span className="text-amber-500">Flienders Ln</span></a></Link>
                    </div>


                </div>
                <div className="lg:ml-10">
                    <h6 data-aos="zoom-in" data-aos-duration="1500" className="footer-title text-3xl md:text-2xl lg:text-4xl text-orange-500 md:ml-20">Images</h6>
                    <hr className="w-full border" />
                    <div data-aos="zoom-out" data-aos-duration="1500" className="grid grid-cols-2 gap-5">
                        <img className="w-48  h-28 md:h-36 lg:h-36" src="https://i.ibb.co/z6FQRPf/Luxury-Beachfront-Apartment.jpg" alt="" />
                        <img className="w-48  h-28 md:h-36 lg:h-36" src="https://i.ibb.co/WstVb5p/Modern-Student-Condo-with-Spectacular-Views.jpg" alt="" />
                        <img className="w-48  h-28 md:h-36 lg:h-36" src="https://i.ibb.co/m915Kcn/Luxury-Townhouse-in-Parkside-Estates.jpg" alt="" />
                        <img className="w-48  h-28 md:h-36 lg:h-36" src="https://i.ibb.co/DKxybfK/Tropical-Paradise-Villa.webp" alt="" />
                    </div>
                </div>
            </footer>
            <footer className="footer footer-center px-10 py-4 border-t bg-black text-white border-base-300">
                <aside className=" items-center grid-flow-col">
                    <p className="">Copyright © 2024 - All right reserved by House Rent</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;