import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectFade, Autoplay } from 'swiper/modules';

import 'swiper/swiper-bundle.css';
import ScrollIntoView from 'react-scroll-into-view'


const Slider = () => {
    return (
        <div id='home'>
            <Swiper
                modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
                effect="fade"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide>

                    <div className="hero h-[400px]" style={{ backgroundImage: 'url(https://i.ibb.co/pLY9W1T/small-open-plan-living-room-apartment.jpg)' }}>
                        <div className="hero-overlay bg-opacity-50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="space-y-5">
                                <h1 className='lg:text-5xl text-white font-bold uppercase'>Discover Your Dream Home Here</h1>
                                <p className="lg:text-lg font-bold lg:w-[700px] mx-auto text-center" >Here your journey to finding the perfect home begins. Whether you are searching for a cozy suburban retreat or a sprawling countryside estate. </p>
                                <ScrollIntoView selector="#about" >
                                    <button className="mdl-button mdl-js-button mdl-button--raised ">
                                        <button className="btn btn-warning text-white text-xl px-10 hover:btn-primary">Scroll Now</button>
                                    </button>
                                </ScrollIntoView>

                            </div>

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero h-[400px]" style={{ backgroundImage: 'url(https://i.ibb.co/t8NyDvL/e53c2b30d1cc63aece0f5c492cdd7222.jpg)' }}>
                        <div className="hero-overlay bg-opacity-50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="space-y-5">
                                <h1 className='lg:text-5xl text-white font-bold uppercase'>Find student housing resident</h1>
                                <p className="lg:text-lg font-bold lg:w-[700px] mx-auto text-center" >Find your ideal student housing at our community! Enjoy a vibrant student community. Elevate your college experience with comfortable living spaces. Welcome home!</p>
                                <ScrollIntoView selector="#about" >
                                    <button className="mdl-button mdl-js-button mdl-button--raised ">
                                        <button className="btn btn-warning text-white text-xl px-10 hover:btn-primary">Scroll Now</button>
                                    </button>
                                </ScrollIntoView>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[400px]" style={{ backgroundImage: 'url(https://i.ibb.co/9YWhYS5/567a3d2633b3cf57c836612976c4d37e.jpg)' }}
                    >

                        <div className="hero-overlay bg-opacity-50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="space-y-5">
                                <h1 className='lg:text-5xl text-white font-bold uppercase'>Unlock Dream Vacation Rentals</h1>
                                <p className="lg:text-lg font-bold lg:w-[700px] mx-auto text-center" >Unlock Your Dream Vacation Rental! Explore our curated selection of residences, from cozy cabins to luxurious villas. Book now and make unforgettable memories.</p>
                                <ScrollIntoView selector="#about" >
                                    <button className="mdl-button mdl-js-button mdl-button--raised ">
                                        <button className="btn btn-warning text-white text-xl px-10 hover:btn-primary">Scroll Now</button>
                                    </button>
                                </ScrollIntoView>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[400px]" style={{ backgroundImage: 'url(https://i.ibb.co/r2fB8cr/8eef83f8-1eee-45b9-9755-4e1762ffb914-jpeg-1200-800.jpg)' }}>
                        <div className="hero-overlay bg-opacity-50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="space-y-5">
                                <h1 className='lg:text-5xl text-white font-bold uppercase'>Elevate Your Living Experience</h1>
                                <p className="lg:text-lg font-bold lg:w-[700px] mx-auto text-center" >Elevate your lifestyle! Discover exceptional rental residences tailored to your needs. Find comfort and style. Rent today for an elevated living experience!</p>
                                <ScrollIntoView selector="#about" >
                                    <button className="mdl-button mdl-js-button mdl-button--raised ">
                                        <button className="btn btn-warning text-white text-xl px-10 hover:btn-primary">Scroll Now</button>
                                    </button>
                                </ScrollIntoView>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[400px]" style={{ backgroundImage: 'url(https://i.ibb.co/1rtnb5L/ac9228d8-ff87-4bf9-8aa7-aafe8907a8d0.jpg)' }}>
                        <div className="hero-overlay bg-opacity-50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="space-y-5">
                                <h1 className='lg:text-5xl text-white font-bold uppercase'>Rent Home with Confidence</h1>
                                <p className="lg:text-lg font-bold lg:w-[700px] mx-auto text-center" >Rent with Confidence: Explore our curated listings for your ideal residence. Find comfort and convenience in our diverse selection of rental properties.</p>
                                <ScrollIntoView selector="#about" >
                                    <button className="mdl-button mdl-js-button mdl-button--raised ">
                                        <button className="btn btn-warning text-white text-xl px-10 hover:btn-primary">Scroll Now</button>
                                    </button>
                                </ScrollIntoView>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[400px]" style={{ backgroundImage: 'url(https://i.ibb.co/7257j27/Apartment-living.jpg)' }}>
                        <div className="hero-overlay bg-opacity-50"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="space-y-5">
                                <h1 className='lg:text-5xl text-white font-bold uppercase'>Browse Single Home Rentals</h1>
                                <p className="lg:text-lg font-bold lg:w-[700px] mx-auto text-center" >Browse Rentals: Where Home Begins. Find your ideal residence with ease. Explore diverse listings, from cozy apartments to spacious homes.</p>
                                <ScrollIntoView selector="#about" >
                                    <button className="mdl-button mdl-js-button mdl-button--raised ">
                                        <button className="btn btn-warning text-white text-xl px-10 hover:btn-primary">Scroll Now</button>
                                    </button>
                                </ScrollIntoView>

                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;