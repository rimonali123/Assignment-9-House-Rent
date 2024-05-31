import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast"
import { Helmet } from "react-helmet-async";

const Login = () => {
    const { singInUser, signInWithGoogle, signInWithGitHub } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        singInUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
                navigate("/")
                toast.success('Login successfully')
            })

            .catch(error => {
                console.log(error.message)
                toast.error('Invalid User login')
            })
    }
    const googleLogin = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
                navigate("/")
                toast.success('Login successfully')

            })
            .catch(error => {
                console.error(error)
            })
    }
    const gitHubLogin = () => {
        signInWithGitHub()
            .then(result => {
                console.log(result.user);
                navigate("/")
                toast.success('Login successfully')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="hero mb-10 p-5 bg-base-200">
            <Helmet>
                <title>Login Now</title>
            </Helmet>
            <div className="hero-content flex-col">
                <h1 className="text-5xl mb-3">Please Login First</h1>

                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control pr-4">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="flex items-center">
                                <input type={showPassword ? "text" : "password"} placeholder="password" name="password" className="input input-bordered w-full" required />
                                <span className="relative  right-7" onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEye /> : <FaEyeSlash />
                                    }
                                </span>
                            </div>
                            <label className="label">
                                <a className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                            <div className="mt-5">
                            <div className="divider divider-primary ">Or</div>
                                <div className="form-control">
                                    <button onClick={googleLogin} className="btn w-full btn-ghost text-xl font-bold px-5 border-2 border-gray-300"><span><FcGoogle /></span> Login with google</button>
                                    <button onClick={gitHubLogin} className="btn w-full btn-ghost text-xl font-bold px-5 border-2 border-gray-300 mt-3 "><span><FaGithub /></span> Login with github</button>
                                </div>
                               
                            </div>
                            <p className="text-lg mt-5">Dont have an account? please <Link to="/register" className="underline text-green-500">Register</Link></p>
                        </div>

                    </form>
                </div>

            </div>
        </div>
    );
};

export default Login;