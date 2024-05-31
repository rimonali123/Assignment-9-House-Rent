import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const SeniorCommunityDetails = () => {
    const communities = useLoaderData();
    console.log(communities)
    const { id4 } = useParams();
    const idInt = parseInt(id4);
    const community = communities.find(community => community.id4 === idInt)
    console.log(community);
    const { image, estate_title, segment_name, description, price, status, area, location, facilities } = community;
    return (
        <div>
            <Helmet>
                <title>Senior Community Card Details | Home Rent</title>
            </Helmet>

            <div className="card border-2 bg-base-100 shadow-xl mt-16 mb-10">
                <figure className="px-5 pt-5">
                    <img src={image} alt="Shoes" className="rounded-xl h-96 w-full" />
                </figure>
                <div className="px-5 py-5 space-y-2 items-center ">
                    <h2 className="card-title text-2xl font-bold">{estate_title}</h2>
                    <h3 className="text-lg "><span className="font-bold">Card Id:</span> {id4}</h3>
                    <h3 className="text-xl "><span className="font-bold">Segment Name:</span> {segment_name}</h3>
                    <p>{description}</p>
                    <p><span className="font-bold">Price:</span> {price}</p>
                    <p><span className="font-bold">Status:</span> {status}</p>
                    <p><span className="font-bold">Area:</span> {area}</p>
                    <p><span className="font-bold">Location:</span> {location}</p>
                    <div className=' flex flex-col gap-2'><span className="font-bold">Facilities:</span>
                        <span className="ml-5">
                            {
                                facilities.map(facility => (<li key={facility}>{facility}</li>))
                            }
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeniorCommunityDetails;