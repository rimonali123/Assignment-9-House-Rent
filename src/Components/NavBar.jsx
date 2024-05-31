import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { FaRegUserCircle } from "react-icons/fa";
import toast from "react-hot-toast"
const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("LogOut Successfully")
                toast.error('LogOut successfully')
            })
            .catch(error => {
                console.log(error)
            })
    }
    const NavLinks = <>
        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-outline btn-success text-bold text-xl' : 'text-xl font-bold'} to="/">Home</NavLink></li>
        {
            user &&
            <>
                <li>
                    <NavLink className={({ isActive }) => isActive ? 'btn btn-outline btn-success text-bold text-xl' : 'text-xl font-bold'} to="/UpdateProfile">Update Profile</NavLink>
                </li>

            </>
        }

        <li>
            <NavLink className={({ isActive }) => isActive ? 'btn btn-outline btn-success text-bold text-xl' : 'text-xl font-bold'} to="/UserProfile">User Profile</NavLink>
        </li>
        <li><NavLink className={({ isActive }) => isActive ? 'btn btn-outline btn-success text-bold text-xl' : 'text-xl font-bold'} to="/ContactUs">Contact Us</NavLink></li>

        {user ? "" :
            <li>
                <NavLink className={({ isActive }) => isActive ? 'btn btn-outline btn-success text-bold text-xl md:hidden' : 'text-xl font-bold md:hidden'} to="/register">Register</NavLink>
            </li>
        }

    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex gap-5">
                        {NavLinks}
                    </ul>
                </div>
                <Link to='/'>
                    <div className="flex item-center">
                        <img src="https://i.ibb.co/6mvqd58/real-state-removebg-preview-C.png" alt="" className="w-14 md:w-20 " />
                        <div>
                            <p className=" text-lg md:text-3xl">House</p>
                            <p className=" text-base md:text-lg ">Rent</p>
                        </div>
                    </div>
                </Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex gap-5">
                    {NavLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <button className="mr-5 tooltip tooltip-left" data-tip={user.displayName}>
                            <NavLink className={({ isActive }) => isActive ? ' text-bold text-3xl rounded-full p-2' : 'text-3xl font-bold rounded-full p-2 '} to="/UserProfile">
                                {
                                    user ?
                                        <div className="avatar mt-3">
                                            <div className="w-9  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src={user?.photoURL
                                                } />
                                            </div>
                                        </div>
                                        : <FaRegUserCircle />
                                }
                            </NavLink>
                        </button>
                        <button onClick={handleLogOut} className="btn btn-outline text-xl font-bold mr-5">LogOut</button>
                    </>

                        :
                        <>
                            <button className="mr-5 tooltip tooltip-left" data-tip={user?.displayName}>
                                <NavLink className={({ isActive }) => isActive ? ' text-bold text-3xl rounded-full p-2' : 'text-3xl font-bold rounded-full p-2 '} to="/UserProfile">
                                    {
                                        user ?
                                            <div className="avatar mt-3">
                                                <div className="w-9  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                    <img src={user?.photoURL
                                                    } />
                                                </div>
                                            </div>
                                            : <FaRegUserCircle />
                                    }
                                </NavLink>
                            </button>
                            <NavLink className={({ isActive }) => isActive ? 'btn btn-outline btn-success text-bold text-xl mr-5 ' : 'btn btn-outline  text-xl font-bold mr-5'} to="/login">Login</NavLink>

                        </>
                }

            </div>
        </div>
    );
};

export default NavBar;