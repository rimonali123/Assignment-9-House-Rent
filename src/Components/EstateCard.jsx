import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

const EstateCard = ({ item }) => {
    const { id, image, estate_title, description, price, status, facilities } = item;
    return (

        <div data-aos="zoom-in"  data-aos-duration="1500" className="card hover:border-2 hover:scale-105 bg-base-100 shadow-xl">
            <figure className="px-5 pt-5">
                <img src={image} alt="Shoes" className="rounded-xl w-full h-52" />
            </figure>
            <div className="px-5 py-5 space-y-2 items-center ">
                <h2 className="card-title text-2xl font-bold">{estate_title.slice(0, 20)}</h2>
               
                <p>{description.slice(0, 100)}</p>
                <div className=' flex flex-col gap-2'><span className="font-bold">Facilities:</span>
                    <span className="ml-5">
                    {
                        facilities.map(facility => (<li key={facility}>{facility}</li>))
                    }
                    </span>
                </div>
                <p><span className="font-bold">Status:</span> {status}</p>
                <p><span className="font-bold">Price:</span> {price}</p>
               
                <div className="card-actions">
                    <Link to={`/singleHomeDetails/${id}`} ><button className="btn btn-primary w-full text-xl font-bold hover:btn-secondary  ">View Property</button></Link>
                </div>
            </div>
        </div>



    );
};
EstateCard.propTypes = {
    item: PropTypes.object.isRequired
  };

export default EstateCard;