import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast"
import { Helmet } from "react-helmet-async";


const UpdateProfile = () => {
    const { user } = useContext(AuthContext);
    const handleSubmit = e => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        console.log(name, photo);
        updateProfile(user, {
            displayName: name, 
            photoURL: photo
          }).then(() => {
          }).catch((error) => {
            console.error(error)
          });
          toast.success('update successfully')
    }
    return (
        <div className="hero lg:h-[500px]">
            <Helmet>
                <title>Update Profile</title>
            </Helmet>
            <div className="hero-content flex-col lg:w-1/2">

                <div className="card shrink-0 w-full shadow-2xl bg-base-200">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input defaultValue={user?.displayName} type="text" placeholder="name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input defaultValue={user?.photoURL} type="text" placeholder="photo url" name="photo" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Update" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;