import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";

const StudentDetails = () => {
    const students = useLoaderData();
    const { id2 } = useParams();
    const idInt = parseInt(id2);
    const student = students.find(town => town.id2 === idInt)
    console.log(student);
    const { image, estate_title, segment_name, description, price, status, area, location, facilities } = student;
    return (
        <div>
            <Helmet>
                <title>Student housing Card Details | Home Rent</title>
            </Helmet>

            <div className="card border-2 bg-base-100 shadow-xl mt-16 mb-10">
                <figure className="px-5 pt-5">
                    <img src={image} alt="Shoes" className="rounded-xl h-96 w-full" />
                </figure>
                <div className="px-5 py-5 space-y-2 items-center ">
                    <h2 className="card-title text-2xl font-bold">{estate_title}</h2>
                    <h3 className="text-lg "><span className="font-bold">Card Id:</span> {id2}</h3>
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

export default StudentDetails;