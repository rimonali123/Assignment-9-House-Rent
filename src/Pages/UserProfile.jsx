import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";



const UserProfile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="text-center space-y-3 mb-10 mt-1 py-10 rounded-xl">
            <Helmet>
                <title>User Profile</title>
            </Helmet>
            {
                user &&
                <>
                    <div className="card lg:w-[700px]  bg-base-100 shadow-2xl p-4 mx-auto">
                        <div className="card-body items-center text-center">
                            <figure >
                                <img src={user?.photoURL} alt="" className="rounded-full w-48 " />
                            </figure>
                            <h2 className="card-title text-center font-bold text-3xl">{user?.displayName}</h2>
                            <hr className="w-full" />

                        </div>
                        <div className="text-start">
                        <p className="text-2xl mb-3"><span className="font-bold">Email :</span> {user?.email} </p>
                        <p className="text-2xl mb-3 break-all"><span className="font-bold">PhotoUrl :</span> {user?.photoURL} </p>
                        </div>

                        <div className="px-10 mb-5">
                            <Link to="/UpdateProfile"><button className=" w-full mx-auto mt-3 btn btn-success text-xl text-white">Update Profile</button></Link>
                        </div>

                    </div>

                </>
            }
        </div>
    );
};

export default UserProfile;