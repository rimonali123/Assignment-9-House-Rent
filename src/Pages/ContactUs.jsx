import { FiPhoneCall } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
AOS.init();


const ContactUs = () => {
    const handleContact = e =>{
        e.preventDefault();
        e.target.reset();
        toast.success('Message Sent Successfully')
    }
    return (
        <div>
            <Helmet>
                <title>Contact Us</title>
            </Helmet>
            <div className="text-center">
            <h1 className="text-3xl font-bold text-violet-600 text-center mb-5">How to Reach us</h1>
                <p  className=" md:w-[500px] lg:w-[700px] mx-auto text-base-content">A home rental company specializes in managing residential properties for lease. These companies serve as intermediaries between property owners and tenants, streamlining the rental process and ensuring a smooth experience for both parties involved. <span className="text-rose-600">If you feel free please send your feedback.</span></p>
            </div>
            
            <div className="flex md:w-[900px] lg:w-full mx-auto flex-col lg:flex-row justify-between lg:px-44 border mt-10 mb-10 p-5 border-red-500 bg-slate-300 rounded-xl">
                <div className="space-y-10">
                   
                    <div   data-aos="zoom-in">
                        <h1 className="text-4xl font-bold flex items-center gap-2"><span className="text-3xl"><SlLocationPin /></span>  Address</h1>
                        <p className="text-xl font-m ml-10">123 Main Street
                            CityTown, <br /> NY 12345
                            United States</p>
                    </div>
                    <div   data-aos="zoom-out">
                        <h1 className="text-4xl font-bold flex items-center gap-2"><span className="text-3xl"><FiPhoneCall /></span> Phone</h1>
                        <p className="text-xl font-m ml-10">+16105579303</p>
                    </div>
                    <div   data-aos="zoom-in">
                        <h1 className="text-4xl font-bold flex items-center gap-2"><span className="text-3xl"><TfiEmail /></span> Email</h1>
                        <p className="text-xl font-m ml-10">jeqocivazo@mailinator.com</p>
                    </div>
                    
                </div>
                <div  data-aos="flip-down" data-aos-duration="1500" className="lg:w-1/2 mt-5 lg:mt-0">
                    <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
                        <form onSubmit={handleContact} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Full name" className="input input-bordered" required />

                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Message</span>
                                </label>
                                <input type="text" placeholder="Type your message" className="input input-bordered" required />
                            </div>
                            <input className="btn btn-primary w-1/2 text-xl text-white hover:bg-green-500" type="submit" value="Send" />


                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;